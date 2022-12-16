import React, { useEffect } from 'react'
import FollowCard from '../network/follow-card'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { findAllUsersThunk } from '../../services/users-thunks'

const AllUsers = () => {

    const { users } = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    })
    console.log(users)
    return (
        <>
            <h1 className='text-muted mt-2'>All Users</h1>
            <hr></hr>
            <div className='container-fluid mt-4' style={{ display: "flex" }}>
                {users &&
                    users.map((user) =>
                        <FollowCard user={user} />
                    )
                }
            </div>
        </>
    )
}

export default AllUsers