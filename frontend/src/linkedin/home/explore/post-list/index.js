import React, { useEffect } from 'react'
import PostItem from './post-item'
import { useDispatch, useSelector } from "react-redux";
import { findPostsThunk } from '../../../../services/posts-thunks.js';

const PostList = () => {
    let {posts, loading} = useSelector(state => state.postData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findPostsThunk())
    }, [])
    posts = posts.slice(0).reverse()

    return (
        <ul className="list-group">
            {   // Loading posts
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                posts.map(post =>
                    <PostItem key={post._id} post={post} />)
            }
        </ul>
    )
}

export default PostList