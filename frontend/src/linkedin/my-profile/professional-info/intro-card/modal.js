import React from 'react'
import "./modal.css"
import { useState } from 'react';

const Modal = ({ open, onClose, profile }) => {

    const [name, setName] = useState(profile.name)
    const [position, setPosition] = useState(profile.position)
    const [city, setCity] = useState(profile.city)
    const [state, setState] = useState(profile.state)
    const [country, setCountry] = useState(profile.country)


    const saveData = () => {
        const data = {
            name: name,
            position: position,
            city: city,
            state: state,
            country: country
        }
        onClose(data)
    }

    if (!open) return null



    const nameChangeHandler = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const positionChangeHandler = (event) => {
        const value = event.target.value;
        setPosition(value);
    }
    const cityChangeHandler = (event) => {
        const value = event.target.value;
        setCity(value);
    }
    const stateChangeHandler = (event) => {
        const value = event.target.value;
        setState(value);
    }
    const countryChangeHandler = (event) => {
        const value = event.target.value;
        setCountry(value);
    }




    return ( 
        <>
            <div className='overlay' />
            <div className='modals' style={{ width: "700px", height: "380px" }}>

                <div className='row'>
                    <div className='col-4 pt-3'>
                        <span className='fw-bold' style={{ fontSize: "20px" }}>Edit Profile Card</span>
                    </div>
                </div>
                <hr className='text-secondary'></hr>

                <div className='row'>
                    <div className='col-12'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>Full name</label>
                        <br></br>
                        <input className='float-start ms-3 rounded-2 border ' style={{width: "95%"}} defaultValue={profile.name} onChange={nameChangeHandler}></input>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>Position</label>
                        <br></br>
                        <input className='float-start ms-3 rounded-2 border ' style={{width: "95%"}} defaultValue={profile.position} onChange={positionChangeHandler}></input>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>City</label>
                        <br></br>
                        <input className='float-start ms-3 rounded-2 border '  defaultValue={profile.city} onChange={cityChangeHandler}></input>
                    </div>
                    <div className='col'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>State</label>
                        <br></br>
                        <input className='float-start ms-3 rounded-2 border '  defaultValue={profile.state} onChange={stateChangeHandler}></input>
                    </div>
                    <div className='col'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>Country</label>
                        <br></br>
                        <input className='float-start ms-3 rounded-2 border '  defaultValue={profile.country} onChange={countryChangeHandler}></input>
                    </div>
                </div>

                <button className='rounded-pill btn btn-primary mt-5 ps-3 pe-3 fw-bold border-0 col-2' width={10} onClick={saveData}>
                    Save
                </button>


            </div>
        </>
    )
}

export default Modal