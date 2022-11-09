import React from 'react'
import PostList from './post-list'
import CreatePost from "./create-post"
const Explore = () => {

  return (
    <div className='Explore'>
        <CreatePost />
        <PostList/>
    </div>
  )
}

export default Explore