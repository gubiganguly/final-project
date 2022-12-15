import React from 'react'
import { Link } from 'react-router-dom'

const FollowCard = ({user}) => {

  return (
    <Link className='card rounded shadow-sm text-decoration-none me-4'  style={{width:"200px"}} to={`/profile/${user._id}`}>
        <img className='card-img-top rounded-top' src={user.image} alt=''/>
        <div className='card-body'>
            <h5 className='card-title m-0'>{user.firstName} {user.lastName}</h5>
            <span className='card-subtitle text-muted'>{user.position}</span>
        </div>
    </Link>
  )
}

export default FollowCard