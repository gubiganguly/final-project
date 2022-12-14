import React from 'react'
import Modal from './modal'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { updateCurrentUserThunk } from '../../../../services/users-thunks';


const Experience = ({ profile }) => {

    const [modal, setModal] = useState(false)

    const editHandler = () => {
        setModal(true)
    }

    const [experience, setExperience] = useState(profile.experience)
    const dispatch = useDispatch()

    const onClose = (data) => {
        const update = []
        for (let i = 0; i < experience.length; i++) {
            update.push(experience[i])
        }
        update.push(data)
        setExperience(dispatch(updateCurrentUserThunk({ experience: update })).arg.experience)
        setModal(false)
    }


    return ( 
        <>
            <div className='list-group-item rounded-2 shadow-sm mt-1'>
                <button className='edit border-0 rounded-circle float-end p-2'>
                    <i className="fa-solid fa-plus" style={{ fontSize: "22px" }} onClick={editHandler}></i>
                </button>
                <div className='row'>
                    <span className='fw-bolder float-start row ms-3' style={{ fontSize: "23px" }}>Experience</span>
                    <div className='list-group'>
                        {
                            experience.map(exp =>
                                <li key={exp.detail} className='listgroup-item row ms-4 mt-2'>
                                    <div className='col-1 p-0'>
                                        <img className='rounded-2' width={50} src={exp.image} />
                                    </div>

                                    <div className='col ms-2'>
                                        <span className='text-secondary row float-end' style={{ fontSize: "13px" }}>{exp.startDate} - {exp.endDate}</span>
                                        <span className='fw-bolder col row' style={{ fontSize: "20px" }}>{exp.workplace}</span>                            
                                        <span className='text-secondary row ms-1' style={{ fontSize: "13px" }}>{exp.title}</span>
                                        <p className=' row ms-1' style={{ fontSize: "15px", textAlign: "left" }}>{exp.detail}</p>
                                    </div>
                                </li>
                            )
                        }
                    </div>
                </div>
            </div>
            <Modal open={modal} onClose={onClose} profile={profile} xModal={() => setModal(false)} />
        </>
    )
}

export default Experience