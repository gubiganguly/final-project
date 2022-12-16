import React from 'react'
import PostList from './post-list'
import CreatePost from "./create-post"
import { useSelector } from 'react-redux'

const Explore = () => {
  const { currentUser } = useSelector(state => state.users)

  return (
    <>
      {currentUser &&
        <div className='Explore'>
          <CreatePost />
          <PostList />
        </div>
      }
      {!currentUser &&
        < div className='Explore mt-3'>
          <h2 className='text-muted'>Recent Posts</h2>
          <hr></hr>
          <PostList />
        </div>
      }
    </>
  )
}

export default Explore