import React from 'react'
import "./index.css"
import PostStats from "../post-stats"
import { Link } from 'react-router-dom'

const PostItem = ({ post }) => { 
    
    var display = ""
    if(!post.isImage) { 
        display='d-none'
    }
    return (
        <li className="list-group-item rounded-3 mb-3 shadow-sm">
            <div className="row position-relative">
                <Link className='col-1' to={`/profile/${post.author}`}>
                    <img width={50} className="rounded-circle" src={post.image} />
                </Link>
                <span className='name fw-bolder col-3 position-absolute'>
                    {post.firstName} {post.lastName}
                    <br />
                    <span className='light-text text-secondary d-none d-sm-none d-md-block'>{post.position}</span>
                </span>
            </div>

            <div className='row justify-content-center'>
                <span className='caption mt-2'>{post.caption}</span>
            </div>
            <img className={`rounded-3 mt-3 ${display}`} style={{ width: 300}} src={`/images/${post.image}`} />
            <PostStats liked={post.liked} likes={post.likes} comments={post.comments} reposts={post.reposts} post={post}/>

        </li>
    )
}

export default PostItem

