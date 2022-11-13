import React from 'react'
import "./modal.css"
import { useState } from 'react';

const Modal = ({ open, onClose, profile, xModal }) => {

    const [workplace, setWorkplace] = useState('')
    const [image, setImage] = useState('/images/gubilabs.png')
    const [title, setTitle] = useState('')
    const [employmentType, setEmploymentType] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [detail, setDetail] = useState('')
    const [current, setCurrent] = useState(false)


    const saveData = () => {
        const data = {
            workplace: workplace,
            image: image,
            employmenType: employmentType,
            title: title,
            startDate: startDate,
            endDate: endDate,
            city: city,
            state: state,
            country: country,
            detail: detail,
            current: current
        }
        onClose(data)
    }

    if (!open) return null


    return (
        <>
            <div className='overlay' />
            <div className='modals' style={{ width: "700px", height: "500px" }}>

                <div className='row'>
                    <div className='col-4 pt-3'>
                        <span className='fw-bold' style={{ fontSize: "20px" }}>Add Experience</span>
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
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>Title*</label>
                        <br></br>
                        <input className='float-start ms-3 rounded-2 border ' style={{ width: "95%" }} onChange={e => setTitle(e.target.value)}></input>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-12'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>Employment Type</label>
                        <br></br>
                        <select className='float-start ms-3 rounded-2 border' style={{ width: "95%", height: "30px" }} onChange={e => setEmploymentType(e.target.value)}>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Self-employed">Self-employed</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Contract">Contranct</option>
                            <option value="Internship">Internship</option>
                            <option value="Apprenticeship">Apprenticeship</option>
                            <option value="Seasonal">Seasonal</option>
                        </select>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-12'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>Company Name*</label>
                        <br></br>
                        <input className='float-start ms-3 rounded-2 border ' style={{ width: "95%" }} defaultValue='' onChange={e => setWorkplace(e.target.value)}></input>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>City</label>
                        <br></br>
                        <input className='float-start ms-3 rounded-2 border ' defaultValue={profile.city} onChange={e => setCity(e.target.value)}></input>
                    </div>
                    <div className='col'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>State</label>
                        <br></br>
                        <select className='float-start rounded-2 border' style={{ width: "90%" }} onChange={e => setState(e.target.value)}>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    <div className='col'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>Country</label>
                        <br></br>
                        <select className='float-start rounded-2 border' style={{ width: "90%" }} onChange={e => setCountry(e.target.value)}>
                            <option value="United States">United States</option>
                        </select>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>Start Date</label>
                        <br></br>
                        <input className='float-start ms-3 rounded-2 border ' type='date' value={startDate} onChange={e => setStartDate(e.target.value)}></input>
                    </div>
                    <div className='col'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>End Date</label>
                        <br></br>
                        <input className='float-start ms-3 rounded-2 border ' type='date' value={endDate} onChange={e => setEndDate(e.target.value)}></input>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col'>
                        <label className=' float-start ms-3' style={{ fontSize: "15px" }}>Description</label>
                        <textarea className='rounded-2 border float-start ms-3' rows="6" cols="73" onChange={e => setDetail(e.target.value)} />
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