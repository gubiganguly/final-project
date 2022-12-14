import React from 'react'
import Modal from './modal'

const Experience = ({ profile }) => {

    return ( 
        <>
            <div className='list-group-item rounded-2 shadow-sm mt-1'>
                <div className='row'>
                    <span className='fw-bolder float-start row ms-3' style={{ fontSize: "23px" }}>Experience</span>
                    <div className='list-group'>
                        {
                            profile.experience.map(exp =>
                                <li key={exp.detail} className='listgroup-item row ms-4 mt-2'>
                                    <div className='col-1 p-0'>
                                        <img className='rounded-2' width={50} src={exp.image} />
                                    </div>

                                    <div className='col ms-2'>
                                        <span className='text-secondary row float-end me-2' style={{ fontSize: "13px" }}>{exp.startDate} - {exp.endDate}</span>
                                        <span className='fw-bolder col row' style={{ fontSize: "20px" }}>{exp.workplace}</span>                            
                                        <span className='text-secondary row ms-1' style={{ fontSize: "13px" }}>{exp.title}</span>
                                        <p className=' row ms-1' style={{ fontSize: "15px", textAlign: "left" }}>{exp.detail}</p>
                                    </div>
                                </li>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience