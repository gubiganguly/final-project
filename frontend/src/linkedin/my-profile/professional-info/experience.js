import React from 'react'

const Experience = ({profile}) => {
    return (
        <div className='list-group-item rounded-2 shadow-sm mt-1'>
            <button className='edit border-0 rounded-circle float-end p-2'>
                <i class="fa-solid fa-plus" style={{ fontSize: "22px" }}></i>
            </button>
            <div className='row'>
                <span className='fw-bolder float-start row ms-3' style={{ fontSize: "23px" }}>Experience</span>
                <div className='list-group'>
                    {
                        profile.experience.map(exp =>
                            <div className='listgroup-item row ms-4 mt-2'>
                                <div className='col-1 p-0'>
                                    <img className='rounded-2' width={50} src={exp.image} />
                                </div>
                                <div className='col ms-2'>
                                    <span className='text-secondary row float-end' style={{ fontSize: "13px" }}>{exp.startDate} - {exp.endDate}</span>
                                    <span className='fw-bolder row' style={{ fontSize: "20px" }}>{exp.workplace}</span>
                                    <span className='text-secondary row ms-1' style={{ fontSize: "13px" }}>{exp.position}</span>
                                    <p className=' row ms-1' style={{ fontSize: "15px", textAlign: "left" }}>{exp.detail}</p>
                                </div>

                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience