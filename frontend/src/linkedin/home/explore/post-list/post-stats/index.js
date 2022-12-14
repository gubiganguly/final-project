import React from 'react'
import { FaRegComment } from 'react-icons/fa'
import { AiOutlineRetweet } from 'react-icons/ai'
import { RiSendPlaneFill } from 'react-icons/ri'
import { updatePostThunk } from '../../../../../services/posts-thunks'
import "./index.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from 'react'
import {useDispatch} from "react-redux";
import {updateLike} from "../../../../reducers/post-reducer"

const PostStats = ({ liked, likes, comments, reposts, post }) => {


    var color = liked ? "red" : ''
    var heart = liked ? "solid" : "regular"

    const dispatch = useDispatch()
    const likeHandler = () => {
        dispatch(updatePostThunk(
            {
                ...post,
                likes: post.likes + 1,
                liked: true
            }))
    }
    const commentButtonHandler = () => {
        console.log("Comment")
    }
    const repostButtonHandler = () => {
        console.log("Repost")
    }
    const sendButtonHandler = () => {
        console.log("Send")
    }

    return (
        <div className='row mt-3'>
            <div className='col'>
                <i onClick={likeHandler} className={`fa-${heart} fa-heart`} style={{ color: `${color}` }} ></i>
                <span> {likes}</span>
            </div>
            <button className='stat col border-0' onClick={commentButtonHandler}>
                <FaRegComment size={25} />
                <span> {comments}</span>
            </button>
            <button className='stat col border-0' onClick={repostButtonHandler}>
                <AiOutlineRetweet size={25} />
                <span> {reposts}</span>
            </button>
            <button className='stat col border-0' onClick={sendButtonHandler}>
                <RiSendPlaneFill size={25} />
            </button>
        </div>
    )
}

export default PostStats