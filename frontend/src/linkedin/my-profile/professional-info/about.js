import React from 'react'

const About = ({profile}) => {
    return (
        <div className='list-group-item rounded-2 shadow-sm mt-1'>
            <button className='edit border-0 rounded-circle float-end p-2'>
                <i class="fa-solid fa-pen"></i>
            </button>
            <div className='row'>
                <span className='fw-bolder float-start row ms-3' style={{ fontSize: "23px" }}>About</span>
                <p className='fw-normal float-start row ms-3 mt-3' style={{ fontSize: "16px", textAlign: 'left' }}>{profile.about}</p>
            </div>
        </div>
    )
}

export default About