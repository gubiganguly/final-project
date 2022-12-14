import React from 'react'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { updateCurrentUserThunk } from '../../../../services/users-thunks';
import Modal from './modal'


const Skills = ({ profile }) => {

    const [modal, setModal] = useState(false)

    const editHandler = () => {
        setModal(true)
    }

    const [skills, setSkills] = useState(profile.skills)
    const dispatch = useDispatch()

    const onClose = (data) => {
        const update = []
        for (let i = 0; i < skills.length; i++) {
            update.push(skills[i])
        }
        update.push(data)
        setSkills(dispatch(updateCurrentUserThunk({ skills: update })).arg.skills) // Push to skill ARRAY!!
        setModal(false)
        console.log(skills)
    }

    return (
        <>
            <div className='list-group-item rounded-2 shadow-sm mt-1'>
                <button className='edit border-0 rounded-circle float-end p-2' onClick={editHandler}>
                    <i className="fa-solid fa-plus" style={{ fontSize: "22px" }}></i>
                </button>
                <div className='row'>
                    <span className='fw-bolder float-start row ms-3' style={{ fontSize: "23px" }}>Skills</span>
                    <div className='list-group'>
                        {
                            skills.map(skill =>
                                <div key={skill} className='listgroup-item  ms-4 mt-2'>
                                    <div className='row float-start'>
                                        <span className='fw-bolder col' style={{ fontSize: "20px" }}>{skill}</span>
                                    </div>
                                    <button className='edit border-0 rounded-circle float-end p-2 col'>
                                        <i className="fa-solid fa-pen" ></i>
                                    </button>
                                    <br></br>
                                    <hr></hr>
                                </div>

                            )
                        }
                    </div>
                </div>
            </div>

            <Modal open={modal} onClose={onClose} profile={profile} xModal={() => setModal(false)} />
        </>


    )
}

export default Skills 