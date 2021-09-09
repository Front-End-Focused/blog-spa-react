import React from 'react'
import { CommentIcon } from './Icons'

export default function Comment({ name, body, email, id }) {
    return (
        <div className="col-12">  
        <div className="row">
            <div className="col-1">
                <CommentIcon/>
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
