import React from 'react'
import "./index.css"
import PostStats from "../post-stats"

const PostItem = ({ post }) => { 
    
    var display = ""
    if(!post.isImage) { 
        display='d-none'
    }
    return (
        <li className="list-group-item rounded-3 mb-3 shadow-sm">
            <div className="row position-relative">
                <div className='col-1'>
                    <img width={50} className="rounded-circle" src="/images/profile.jpeg" />
                </div>
                <span className='name fw-bolder col-3 position-absolute'>
                    {post.firstName} {post.lastName}
                    <br />
                    <span className='light-text text-secondary'>{post.position}</span>
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

