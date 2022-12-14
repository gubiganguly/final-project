import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CreateProfile = ({setLoginInfo}) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = () => {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            connectionCount: 0,
            image: '/images/profile.jpeg' 
        }
        setLoginInfo(user)
    } 
    return (
        <div className='global container'>
            <h2>Make the most out of your professional life</h2>
            <div className='row'>
                <div className='col-3' />
                <div className='list-group shadow-sm col-6' style={{ backgroundColor: "white" }}>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <span className='float-start ms-4 mt-3 fw-bold' style={{ fontSize: "15px" }}>First Name:</span>
                            <input className='float-start border border-2 rounded-2 mt-2 ms-4 me-3 ps-3' 
                                    style={{ height: "60px", width: "90%" }} 
                                    placeholder="First Name"
                                    onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className='col-6'>
                            <span className='float-start ms-4 mt-3 fw-bold' style={{ fontSize: "15px" }}>Last Name:</span>
                            <input className='float-start border border-2 rounded-2 mt-2 ms-4 me-3 ps-3' 
                                    style={{ height: "60px", width: "90%" }} 
                                    placeholder="Last Name"
                                    onChange={e => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <span className='col-2  mt-3 fw-bold float-start' style={{ fontSize: "15px" }}>Email:</span>
                            <input className='border border-2 rounded-2 mt-2 ms-4 ps-3 float-start' 
                            style={{ height: "60px", width:"95%" }} 
                            placeholder="Email" 
                            onChange={e => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <span className='col-3 ms-3  mt-3 fw-bold float-start' style={{ fontSize: "15px" }}>Create Password:</span>
                            <input className='border border-2 rounded-2 mt-2 ms-4 ps-3 float-start' 
                                    style={{ height: "60px", width:"95%" }} type='password'
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>


                    <Link className='btn bg-success rounded-3 border-0 pt-2 pb-2 ms-5 me-5 mt-5 mb-4' to='/create-profile/add-experience' onClick={createUser}>
                        <span className='fw-bold text-light' style={{ fontSize: "25px" }}>Next</span>
                    </Link>

                </div>
                <div className='col-3' />
            </div>
        </div>
    )
}

export default CreateProfile