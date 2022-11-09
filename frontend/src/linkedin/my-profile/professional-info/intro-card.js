import React from 'react'

const IntroCard = ({profile}) => {
    return (
        <div className='list-group-item rounded-2 shadow-sm position-relative'>
            <div className='row'>
                <div className='col'>
                    <img className='profilePic rounded-circle float-start border border-4 ms-5' width={125} src={profile.image} alt='' />
                    <button className='edit border-0 rounded-circle float-end p-2'>
                        <i class="fa-solid fa-pen"></i>
                    </button>

                </div>
            </div>
            <div className='row'>

            </div>
            <div className='row ms-5 mt-2' >
                <span className='fw-bolder float-start row' style={{ fontSize: "25px" }}>{profile.name}</span>
                <span className='fw-normal float-start row' style={{ fontSize: "17px" }}>{profile.position}</span>
                <span className='fw-light float-start row' style={{ fontSize: "13px" }}>{profile.city}, {profile.state}, {profile.country}</span>
                <span className='fw-bold text-primary float-start row' style={{ fontSize: "15px" }}>{profile.connectionCount} connections</span>
            </div>
        </div>
    )
}

export default IntroCard