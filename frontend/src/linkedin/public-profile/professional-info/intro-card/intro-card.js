import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const IntroCard = ({ profile }) => {

    const dispatch = useDispatch()
    const createConnection = () => {
        // dispatch(createConnectionThunk())
        // dispatch(updateUserThunk)
    }

    return (
        <>
            <div className='list-group-item rounded-2 shadow-sm position-relative'>
                <div className='row'>
                    <div className='col position-relative'>
                        <img className='profilePic rounded-circle border border-4 ms-5' width={125} src={profile.image} alt='' />
                        <button className='rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold border-0 position-absolute' style={{right: 20}}>Follow</button>
                    </div>
                </div>
                <div className='row ms-5 mt-2' >
                    <span className='fw-bolder' style={{ fontSize: "25px" }}>{profile.firstName} {profile.lastName}</span>
                    <span className='fw-normal' style={{ fontSize: "17px" }}>{profile.position}</span>
                    <span className='fw-light' style={{ fontSize: "13px" }}>{profile.city}, {profile.state}, {profile.country}</span>
                    <div className='row'>
                        <Link className='fw-bold text-primary text-decoration-none float-start col' style={{ fontSize: "15px" }}>Connections {profile.connectionCount}</Link>
                        <Link className='fw-bold text-success text-decoration-none float-start col' style={{ fontSize: "15px" }}>Posts {profile.connectionCount}</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default IntroCard