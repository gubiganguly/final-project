import React from 'react'

const Awards = ({ profile }) => {
    return (
        <div className='list-group-item rounded-2 shadow-sm mt-1'>
            <button className='edit border-0 rounded-circle float-end p-2'>
                <i className="fa-solid fa-plus" style={{ fontSize: "22px" }}></i>
            </button>
            <div className='row'>
                <span className='fw-bolder float-start row ms-3' style={{ fontSize: "23px" }}>Honors & awards</span>
                <div className='list-group'>
                    {
                        profile.awards.map(award =>
                            <div key={award} className='listgroup-item  ms-4 mt-2'>
                                <div className='row float-start'>
                                    <span className='fw-bolder col' style={{ fontSize: "20px" }}>{award}</span>
                                </div>
                                <button className='edit border-0 rounded-circle float-end p-2 col'>
                                    <i className="fa-solid fa-pen" ></i>
                                </button>
                                <br></br>
                                <hr></hr>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Awards