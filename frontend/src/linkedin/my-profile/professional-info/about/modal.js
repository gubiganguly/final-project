import React from 'react'
import "./modal.css"
import { useState } from 'react';


const Modal = ({ open, onClose, profile }) => {
    

    const [about, setAbout] = useState(profile.about)

    const saveData = () => {  
        const data = {
            about: about
        }
        onClose(data)
    }

    if (!open) return null

    

    const aboutChangeHandler = (event) => {
        const aboutValue = event.target.value;
        setAbout(aboutValue);
    }




    return (
        <>
            <div className='overlay' />
            <div className='modals' style={{ width: "700px", height: "500px" }}>

                <div className='row'>
                    <div className='col-3 pt-3'>
                        <span className='fw-bold' style={{ fontSize: "20px" }}>Edit about</span>
                    </div>
                </div>
                <hr className='text-secondary'></hr>
                <div className='row'>
                    <p className='fw-light ps-5 pe-5' style={{ fontSize: "13px", textAlign: "left" }}>You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</p>
                </div>
                <div className='row'>
                    <div className='col'>
                        <textarea rows="10" cols="73" defaultValue={profile.about} onChange={aboutChangeHandler}>

                        </textarea>
                    </div>
                </div>
                <button className='rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold border-0 col-2' width={10} onClick={saveData}>
                    Save
                </button>


            </div>
        </>
    )
}

export default Modal