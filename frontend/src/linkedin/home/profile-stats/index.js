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
                        <div className='row'>
                        <span className='fw-bold text-secondary col'>Connections:</span>
                        <span className='fw-bold text-success  col'>{currentUser.connectionCount}</span>
                        </div>
                        <div className='row'>
                        <span className='fw-bold text-secondary col'>Posts:</span>
                        <span className='fw-bold text-primary float-end col'>1,324</span>     
                        </div>
                        <div className='row'>
                        <span className='fw-bold text-secondary float-start col'>Jobs:</span>
                        <span className='fw-bold text-danger float-end col'>23</span>   
                        </div>



                    </div>
                </div>
            }
        </>
    )
}

export default ProfileStats