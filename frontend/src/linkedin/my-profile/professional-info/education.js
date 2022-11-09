import React from 'react'

const Education = ({ profile }) => {
    return (
        <div className='list-group-item rounded-2 shadow-sm mt-1'>
            <button className='edit border-0 rounded-circle float-end p-2'>
                <i class="fa-solid fa-plus" style={{ fontSize: "22px" }}></i>
            </button>
            <div className='row'>
                <span className='fw-bolder float-start row ms-3' style={{ fontSize: "23px" }}>Education</span>
                <div className='list-group'>
                    {
                        profile.education.map(edu =>
                            <div className='listgroup-item row ms-4 mt-2'>
                                <div className='col-1 p-0'>
                                    <img className='rounded-circle' width={60} src={edu.image} />
                                </div>
                                <div className='col ms-2'>
                                    <span className='text-secondary row float-end' style={{ fontSize: "13px" }}>{edu.startDate} - {edu.endDate}</span>
                                    <span className='fw-bolder row' style={{ fontSize: "20px" }}>{edu.school}</span>
                                    <span className='text-secondary row ms-1' style={{ fontSize: "13px" }}>{edu.degree} {edu.major}</span>
                                </div>

                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Education