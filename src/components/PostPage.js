import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import getDataForPostPage from '../actions/getDataForPostPage'
import { AvatarIcon } from './Icons'
import Comment from './Comment'

function PostPage() {
    const [data, setData] = useState()
    let { id } = useParams()
    
    useEffect(() => {
        async function getPost() {
            const data = await getDataForPostPage(id)
            setData(data);
        }
        getPost()
    }, [id]);

    function renderCommentList() {
        return data.comments.map(comment => <Comment key={ comment.id} name={comment.name} body={comment.body} email={comment.email} id={comment.id}/>)
    }
    
    return data ? ( <main>
                <section>
                    <h1 className="display-3 text-capitalize">{data.title}</h1>
                    <p className="lead mt-5 mb-5">{data.body}</p>
                </section>
                <section className="d-flex mt-5 mb-5">
                    <div className="flex-shrink-0">
                    <AvatarIcon/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h4>
                        <Link to={`/author/${data.author.id}`}>
                            {data.author.username}
                        </Link>
                        </h4>
                        <p>{data.author.companyName} . {data.author.website}</p>
                    </div>
                </section>
        <hr />
        {renderCommentList()}
    </main>) : 'please wait...'
}



export default PostPage
