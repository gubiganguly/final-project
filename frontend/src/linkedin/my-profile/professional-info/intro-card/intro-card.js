import React from 'react'
import Modal from './modal'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { updateProfile } from '../../../reducers/profile-reducer';

const IntroCard = ({ profile }) => {

    const [modal, setModal] = useState(false)


    const editHandler = () => {
        setModal(true)
    }

    const [name, setName] = useState(profile.name)
    const [position, setPosition] = useState(profile.position)
    const [city, setCity] = useState(profile.city)
    const [state, setState] = useState(profile.state)
    const [country, setCountry] = useState(profile.country)
    const dispatch = useDispatch()

    const onClose = (data) => {
        setName(dispatch(updateProfile(data)).payload.name)
        setPosition(dispatch(updateProfile(data)).payload.position)
        setCity(dispatch(updateProfile(data)).payload.city)
        setState(dispatch(updateProfile(data)).payload.state)
        setCountry(dispatch(updateProfile(data)).payload.country)
        setModal(false)
    }



    return (
        <>
            <div className='list-group-item rounded-2 shadow-sm position-relative'>
                <div className='row'>
                    <div className='col'>
                        <img className='profilePic rounded-circle float-start border border-4 ms-5' width={125} src={profile.image} alt='' />
                        <button className='edit border-0 rounded-circle float-end p-2' onClick={editHandler}>
                            <i className="fa-solid fa-pen"></i>
                        </button>

                    </div>
                </div>
                <div className='row'>

                </div>
                <div className='row ms-5 mt-2' >
                    <span className='fw-bolder float-start row' style={{ fontSize: "25px" }}>{name}</span>
                    <span className='fw-normal float-start row' style={{ fontSize: "17px" }}>{position}</span>
                    <span className='fw-light float-start row' style={{ fontSize: "13px" }}>{city}, {state}, {country}</span>
                    <span className='fw-bold text-primary float-start row' style={{ fontSize: "15px" }}>{profile.connectionCount} connections</span>
                </div>
            </div>
            <Modal open={modal} onClose={onClose} profile={profile}/>
        </>
    )
}

export default IntroCard