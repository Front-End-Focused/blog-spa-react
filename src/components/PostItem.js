import React from "react";
import { Link } from "react-router-dom"

function PostItem({ title, body, id }) {
    return (
        <article className="post" id={`post-${id}`}>
            <h3 className="text-capitalize">{title}</h3>
            <div className="row">
                <p className="col-10 text-truncate">
                    {body}
                </p>
            </div>
            <Link to={`/post/${id}`} className="btn btn-dark">
                Read more &raquo;
            </Link>
            <hr />
        </article>
    )
}

export default PostItem;