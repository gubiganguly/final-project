import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import PostItem from '../home/explore/post-list/post-item'
import { useDispatch } from 'react-redux'
import { findPostByAuthorThunk } from '../../services/posts-thunks'
import { findUserByIdThunk } from '../../services/users-thunks'
import { Link } from 'react-router-dom'

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
 
            {publicProfile &&
                <div className='row'>
                    <Link to={`/profile/${publicProfile._id}`}>
                        <img className='profilePic rounded-circle border border-4' width={125} src={publicProfile.image} alt='' />
                    </Link>
                    <h4 className='text-muted'>{publicProfile.firstName} {publicProfile.lastName}'s posts</h4>
                    <hr></hr>
                </div>
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