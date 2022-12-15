import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../services/users-thunks'

const Landing = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const login = () => {
        let cred = {
            email: email,
            password: password
        }
        dispatch(loginThunk(cred))
    }


    return (
        <div className='global container'>
            <div className='row'>
                <div className='col-7 text-center mt-5'>
                    <div>
                        <img src="images/logo.png" width={200} />
                    </div>
                    <div className='mt-3'>
                        <span className='fw-bold d-inline-block' style={{ fontSize: "25px", width: "300px", textAlign: "left" }}>Welcome to your professional community</span>
                    </div>

                </div>
                <div className='col-5 list-group shadow-sm' style={{ backgroundColor: "white"}}>
                    <input className='border border-2 rounded-2 mt-4 ms-4 me-3 ps-3'
                            style={{ height: "60px" }}
                            placeholder="Email or phone number"
                            onChange={e => setEmail(e.target.value)} />
                    <input className='border border-2 rounded-2 mt-3 ms-4 me-3 ps-3'
                            type="password" 
                            style={{ height: "60px" }} 
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)} />
                    <Link className='btn bg-primary rounded-3 border-0 pt-2 pb-2 ms-4 me-3 mt-3' to='/home' onClick={login}>
                        <span className='fw-bold text-light' style={{ fontSize: "25px" }}>Log in</span>
                    </Link>
                    <Link className='text-decoration-none mt-1' to='/home'>Continue as guest</Link>
                    <hr></hr>
                    <Link className='btn bg-success rounded-3 border-0 pt-2 pb-2 ms-5 me-5 mt-3 mb-4' to='/create-profile'>
                        <span className='fw-bold text-light' style={{ fontSize: "25px" }}>Create New Account</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing