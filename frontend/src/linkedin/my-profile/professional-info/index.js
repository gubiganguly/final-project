import React, { useState, useEffect } from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import Experience from './experience/experience'
import About from './about/about'
import IntroCard from './intro-card/intro-card'
import Education from './education/education'
import Skills from './skills/skills'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutThunk, profileThunk } from '../../../services/users-thunks'

const ProfessionalInfo = () => {

 
    const profile = useSelector(state => state.users).currentUser
 
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
    
    const logout = () => {
        dispatch(logoutThunk())
    }

    let loggedin = false
    if (profile) {
        loggedin = true
    }
    else {
        loggedin = false
    }

    return ( 
        <>
            {loggedin &&
                <div className='list-group'>
                    <IntroCard profile={profile} />

                    <About profile={profile} />

                    <Experience profile={profile} />

                    <Skills profile={profile} />

                    <Link className='btn bg-success rounded-3 border-0 pt-2 pb-2 ms-5 me-5 mt-3 mb-4' to='/' onClick={logout}>
                        <span className='fw-bold text-light' style={{ fontSize: "25px" }}>Log Out</span>
                    </Link>
                </div>
            }
        </>
    )
}

export default ProfessionalInfo

