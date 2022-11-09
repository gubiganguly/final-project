import React from 'react'
import { Link } from 'react-router-dom'

const ProfileStats = () => {

    

    return (
        <div className='list-group mt-5 shadow-sm'>
            <div className="list-group-item">
                <Link to="/my-profile">
                    <img className="rounded-circle mb-2" src="/images/profile.jpeg" width={50} />
                </Link>
                <br></br>
                <span className='fw-bolder'>Gubi Ganguly</span>
                <br></br>
                <span className='light-text text-secondary'>CEO of Gubi Labs</span>
            </div>
            
            <div className='list-group-item'>
                <span className='fw-bold text-secondary float-start'>Connections: </span>
                <span className='fw-bold text-success float-end'>494</span>
            </div>
        </div>
    )
}

export default ProfileStats