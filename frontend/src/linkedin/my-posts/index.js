import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import PostItem from '../home/explore/post-list/post-item'
import { useDispatch } from 'react-redux'
import { findPostByAuthorThunk } from '../../services/posts-thunks'
import { findUserByIdThunk } from '../../services/users-thunks'

const MyPosts = () => {
    let { posts } = useSelector(state => state.postData)
    let { currentUser } = useSelector(state => state.users)
    const { publicProfile } = useSelector(state => state.users)
    const params = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findPostByAuthorThunk(params.author))
        dispatch(findUserByIdThunk(params.author))
    }, [])


    posts = posts.slice(0).reverse()
    return (
        <>
            {publicProfile &&
                <div className='row'>
                    { params.author === currentUser._id &&
                        <h1>My Posts</h1>
                    } 
                    { params.author != currentUser._id &&
                        <h1>{publicProfile.firstName} {publicProfile.lastName}'s Posts</h1> 
                    }         
                    <div className='col-2' />
                    <ul className="list-group col">
                        {posts &&
                            posts.map(post =>
                                <PostItem key={post._id} post={post} />
                            )
                        }
                    </ul>
                    <div className='col-2' />
                </div>
            }
        </>
    )
}

export default MyPosts