import React, { useEffect } from 'react'
import Modal from './modal'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { updateCurrentUserThunk } from '../../../../services/users-thunks';
import { Link } from 'react-router-dom';



const IntroCard = ({ profile }) => {

    const [modal, setModal] = useState(false)



    const editHandler = () => {
        setModal(true)
    }

    const [firstName, setFirstName] = useState(profile.firstName)
    const [lastName, setLastName] = useState(profile.lastName)
    const [position, setPosition] = useState(profile.position)
    const [city, setCity] = useState(profile.city)
    const [state, setState] = useState(profile.state)
    const [country, setCountry] = useState(profile.country)
    //const dispatch = useDispatch()

    const dispatch = useDispatch()
    const onClose = (data) => {
        setFirstName(dispatch(updateCurrentUserThunk(data)).arg.firstName)
        setLastName(dispatch(updateCurrentUserThunk(data)).arg.lastName)
        setPosition(dispatch(updateCurrentUserThunk(data)).arg.position)
        setCity(dispatch(updateCurrentUserThunk(data)).arg.city)
        setState(dispatch(updateCurrentUserThunk(data)).arg.state)
        setCountry(dispatch(updateCurrentUserThunk(data)).arg.country)
        setModal(false)
    }


 
    return (
        <> 
            <div className='list-group-item rounded-2 shadow-sm position-relative'>
                <div className='row'>
                    <div className='col'>
                        <img className='profilePic rounded-circle ms-4 border border-4 ' width={125} src={profile.image} alt='' />
                        <button className='edit border-0 rounded-circle float-end p-2' onClick={editHandler}>
                            <i className="fa-solid fa-pen"></i>
                        </button>

                    </div>
                </div>
                <div className='row'>

                </div>
                <div className='row mt-2' >
                    <span className='fw-bolder' style={{ fontSize: "25px" }}>{firstName} {lastName}</span>
                    <span className='fw-normal' style={{ fontSize: "17px" }}>{position}</span>
                    <span className='fw-light ' style={{ fontSize: "13px" }}>{city}, {state}, {country}</span>
                    <div className='row'>
                        <Link className='fw-bold text-primary text-decoration-none col' style={{ fontSize: "15px" }} to='/network'>Connections: {profile.connectionCount}</Link>
    
                        <Link className='fw-bold text-success text-decoration-none col' style={{ fontSize: "15px" }} to={`/posts/${profile._id}`}>Posts: {profile.postCount}</Link>
                    
                        <Link className='fw-bold text-danger text-decoration-none col' style={{ fontSize: "15px" }} to='/jobs'>Jobs: {profile.connectionCount}</Link>
                    </div>
                </div>
            </div>
            <Modal open={modal} onClose={onClose} profile={profile}/>
        </>
    )
}

export default IntroCard 