import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfileStats = () => {

    const { currentUser } = useSelector(state => state.users)

    let loggedin = false
    if (currentUser) {
        loggedin = true
    }
    else {
        loggedin = false
    }

    return (
        <>
            {loggedin &&
                <div className='list-group mt-5 shadow-sm'>
                    <div className="list-group-item">
                        <Link to="/my-profile">
                            <img className="rounded-circle mb-2" src="/images/profile.jpeg" width={50} />
                        </Link>
                        <br></br>
                        <span className='fw-bolder'>{currentUser.firstName} {currentUser.lastName}</span>
                        <br></br>
                        <span className='light-text text-secondary'>{currentUser.position}</span>
                    </div>

                    <div className='list-group-item'>

                        <span className='fw-bold text-secondary float-start'>Connections: </span>
                        <span className='fw-bold text-success float-end'>{currentUser.connectionCount}</span>
                        <span className='fw-bold text-secondary float-start'>Coins:</span>
                        <span className='fw-bold text-primary float-end'>1,324</span>
                        <span className='fw-bold text-secondary float-start'>Experience: </span>
                        <span className='fw-bold text-danger float-end'>King</span>
                    </div>
                </div>
            }
        </>
    )
}

export default ProfileStats