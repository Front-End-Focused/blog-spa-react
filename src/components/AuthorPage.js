import React, {useState, useEffect} from 'react'
import { AvatarIcon } from './Icons'
import { useParams } from 'react-router'
import getDataForAuthorPage from '../actions/getDataForAuthorPage';
import PostItem from './PostItem';


export default function AuthorPage (){

    const [data, setData] = useState()
    let { id } = useParams()
    
    useEffect(() => {
        async function getDataAuthor() {
            const data = await getDataForAuthorPage(id)
            setData(data);
        }
        getDataAuthor()
    }, [id]);
    
    function renderPostsSection() {
        return data.posts.map(({id, title, body }) => <PostItem key = {id} title = {title} body = {body} id = {id} />)
    }


    return (
        data ?

            <main>
                <section className="d-flex mt-5 mb-5">
                    <div className="flex-shrink-0">
                        <AvatarIcon/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h4>{data.name}</h4>
                        <p>{data.company.name} . {data.company.catchPhrase}</p>
                        <p>{data.company.bs}</p>
                        <p>{data.website}</p>
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                        <p>{data.address.street}, {data.address.city}, {data.address.zipcode}</p>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <img src={data.photos.url} alt = {data.photos.title}  width = '200'/>
                    </div>
                </section>
                <hr />
            {renderPostsSection()}
            </main> : 'please wait...'
        )
}

