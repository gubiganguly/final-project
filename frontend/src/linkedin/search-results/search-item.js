import React from 'react'
import { Link } from 'react-router-dom'

const SearchItem = ({ user }) => {

    return (
        <li className="list-group-item rounded-3 shadow-sm">
            <div className='row position-relative'>
                <div className='col-2'>
                    <img width={50} className="rounded-circle" src="/images/profile.jpeg" />
                </div>
                <div className='col-4'>
                    <h3 className='float-start'>
                        {user.firstName} {user.lastName}
                        <br />
                        <span className='light-text text-secondary float-start'>{user.position}</span>
                    </h3>
                </div>
                <div className='col'>
                    <Link className='rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold border-0' 
                    to={`/profile/${user._id}`}>View</Link>
                </div>
            </div>

        </li>
    )
}

export default SearchItem