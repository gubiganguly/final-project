import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {findFollowersThunk} from '../../../services/follows-thunk'
import './index.css'

const ProfileStats = ({user}) => {

    const {followers} = useSelector(state => state.follows)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findFollowersThunk(user._id))
    }, [])


    return (
        <>
            {user &&
                <div className='list-group mt-5 shadow-sm'>
                    <div className="list-group-item">
                        <Link to="/my-profile">
                            <img className="rounded-circle mb-2" src={user.image} width={50} />
                        </Link>
                        <br></br>
                        <span className='fw-bolder'>{user.firstName} {user.lastName}</span>
                        <br></br>
                        <span className='light-text text-secondary'>{user.position}</span>
                    </div>

                    <div className='list-group-item caption'>
                        <div className='row'>
                        <span className='fw-bold text-secondary col'>Connections:</span>
                        {followers &&
                            <span className='fw-bold text-primary col text-right'>{followers.length}</span>
                        }
                        </div>
                        <div className='row'>
                        <span className='fw-bold text-secondary col'>Posts:</span>
                        <span className='fw-bold text-success  col text-right'>{user.postCount}</span>     
                        </div>
                        <div className='row'>
                        <span className='fw-bold text-secondary float-start col'>Jobs:</span>
                        <span className='fw-bold text-danger col text-right'>1</span>   
                        </div>



                    </div>
                </div>
            }
        </>
    )
}

export default ProfileStats