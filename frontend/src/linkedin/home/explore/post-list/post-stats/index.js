import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { AiOutlineRetweet } from 'react-icons/ai'
import { RiSendPlaneFill } from 'react-icons/ri'
import "./index.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from 'react'
import {useDispatch} from "react-redux";
import {updateLike} from "../../../../reducers/post-reducer"

const PostStats = ({ liked, likes, comments, reposts, id }) => {

    const [likeFill, setLikeFill] = useState("regular")
    const [likeColor, setLikeColor] = useState("")

    const dispatch = useDispatch()
    const likeButtonHandler = () => {
        if (!liked) {
            setLikeFill("solid")
            setLikeColor("blue")
            dispatch(updateLike(id));
        } else {
            setLikeFill("regular")
            setLikeColor("")
            dispatch(updateLike(id));
        }
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
            <button className='stat col border-0' onClick={likeButtonHandler}>
                <i className={`fa-${likeFill} fa-thumbs-up fa-2x`} style={{ color: likeColor }}></i>
                <span> {likes}</span>
            </button>
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