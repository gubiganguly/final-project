import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findFollowingThunk } from "../../services/follows-thunk";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import FollowCard from './follow-card';
import './follow-card.css'
import { findUserByIdThunk } from '../../services/users-thunks'

const Following = () => {

    const params = useParams()
    const { publicProfile } = useSelector(state => state.users)
    const { following } = useSelector((state) => state.follows)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findFollowingThunk(params.uid))
        dispatch(findUserByIdThunk(params.uid))
    }, [])

    const profile = publicProfile

    return (
        <>
            {publicProfile &&
                <div className='row'>
                    <Link to={`/profile/${profile._id}`}>
                        <img className='profilePic rounded-circle border border-4' width={125} src={profile.image} alt='' />
                    </Link>
                    <h4 className='text-muted'>{profile.firstName} {profile.lastName}</h4>
                </div>
            }

            <div className='row'>
                <div className='row'>
                    <div className='col' />
                    <div className='col '>
                        <ul className="nav nav-pills mb-2 mt-2 justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link fw-bold active" href={`/network/${params.uid}/following`}>Following</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href={`/network/${params.uid}/followers`}>Followers</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col' />
                </div>
            </div>
            <hr></hr>

            <div className='container-fluid mt-4' style={{ display: "flex" }}>

                {following &&
                    following.map((follow) =>
                        <FollowCard user={follow.followed} />
                    )
                }
            </div>
        </>

    )
}

export default Following

