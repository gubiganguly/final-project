import React from 'react'
import "./modal.css"
import { useState } from 'react';

const Modal = ({ open, onClose, profile, xModal }) => {

    const [skill, setSkill] = useState('')

    const saveData = () => {
        const data = skill
        onClose(data)
    }

    if (!open) return null


    return (
        <>
            <div className='overlay' />
            <div className='modals' style={{ width: "700px", height: "250px" }}>

                <div className='row'>
                    <div className='col-4 pt-3'>
                        <span className='fw-bold' style={{ fontSize: "20px" }}>Add Skill</span>
                    </div>
                    <div className='col'>
                        <button className='edit float-end border-0 rounded-circle float-end p-2' onClick={xModal}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>
                </div>
                <hr className='text-secondary'></hr>

                <div className='row'>
                    <div className='col-12'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>Skill</label>
                        <br></br>
                        <input className='float-start ms-3 rounded-2 border ' style={{ width: "95%" }} onChange={e => setSkill(e.target.value)}></input>
                    </div>
                </div>

                <button className='rounded-pill btn btn-primary mt-4 mb-4 ps-3 pe-3 fw-bold border-0 col-2' width={10} onClick={saveData}>
                    Save
                </button>


            </div>
        </>
    )
}

export default Modal