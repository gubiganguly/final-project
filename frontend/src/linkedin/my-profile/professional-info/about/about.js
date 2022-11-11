import React from 'react'
import { useState } from 'react'
import Modal from './modal'
import { useDispatch } from "react-redux";
import { updateProfile } from '../../../reducers/profile-reducer';


const About = ({ profile }) => {


    const [modal, setModal] = useState(false)

    
    const editHandler = () => {
        setModal(true)
    }

    const [about, setAbout] = useState(profile.about)
    const dispatch = useDispatch()

    const onClose = (data) => {
        setAbout(dispatch(updateProfile(data)).payload.about)
        setModal(false)
    }

    
    return (
        <>
            <div className='list-group-item rounded-2 shadow-sm mt-1'>
                <button className='edit border-0 rounded-circle float-end p-2' onClick={editHandler}>
                    <i className="fa-solid fa-pen"></i>
                </button>
                <div className='row'>
                    <span className='fw-bolder float-start row ms-3' style={{ fontSize: "23px" }}>About</span>
                    <p className='fw-normal float-start row ms-3 mt-3' style={{ fontSize: "16px", textAlign: 'left' }}>{about}</p>
                </div>
            </div>
            <Modal open={modal} onClose={onClose} profile={profile}/>
        </>
    )
}

export default About