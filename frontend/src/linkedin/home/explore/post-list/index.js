import React from 'react'
import PostItem from './post-item'
import {useSelector} from "react-redux";

const PostList = () => {
    const postArray = useSelector(state => state.post)

    return (
        <ul className="list-group">
            {
                postArray.map(post =>
                    <PostItem key={post._id} post={post} />)
            }
        </ul>
    )
}

export default PostList