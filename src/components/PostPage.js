import React from "react";
import { useParams, Link } from "react-router-dom"
import getDataForPostPage from "../actions/getDataForPostPage"
import { AvatarIcon, CommentIcon } from "./Icons"

function PostPage() {
    const [data, setData] = React.useState()
    let { id } = useParams();
    React.useEffect(() => {
        async function getPost() {
            const data = await getDataForPostPage(id);
            setData(data);
        }
        getPost();
    }, [id])

    function CommentItem({ name, body, email, id }) {
        return (
            <div className="col-12">
                <div className="row">
                    <div className="col-1">
                        <CommentIcon />
                    </div>
                    <div className="col-11">
                        <div className="card mb-4" id={`comment-${id}`}>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                                <p className="card-text">{body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function CommentsSection() {
        let { comments } = data;
        if (!comments.length) return;
        const dataCom = comments.map((comment) => <CommentItem name={comment.name} body={comment.body} email={comment.email} id={comment.id} />)
        return (
            <section className="mt-5 mb-5">
                <h4 className="mb-5">Comments ({comments.length})</h4>
                <div className="row">
                    {dataCom}
                </div>
            </section>
        )
    }

    return data ? (
        <main>
            <section>
                <h1 className="display-3 text-capitalize">{data.title}</h1>
                <p className="lead mt-5 mb-5">{data.body}</p>
            </section>
            <section className="d-flex mt-5 mb-5">
                <div className="flex-shrink-0">
                    <AvatarIcon />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h4>
                        <Link to={`/author/${data.author.id}`}>{data.author.username}</Link>
                    </h4>
                    <p>{data.author.companyName} . {data.author.website}</p>
                </div>
            </section>
            <hr />
            <CommentsSection />
        </main>
    ) : "Please wait..."
}

export default PostPage;