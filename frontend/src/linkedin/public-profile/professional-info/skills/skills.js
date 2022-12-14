import React from 'react'

const Skills = ({ profile }) => {

    return (
        <>
            <div className='list-group-item rounded-2 shadow-sm mt-1'>
                <div className='row'>
                    <span className='fw-bolder float-start row ms-3' style={{ fontSize: "23px" }}>Skills</span>
                    <div className='list-group'>
                        {
                            profile.skills.map(skill =>
                                <div key={skill} className='listgroup-item  ms-4 mt-2'>
                                    <div className='row float-start'>
                                        <span className='fw-bolder col' style={{ fontSize: "20px" }}>{skill}</span>
                                    </div>

                                    <br></br>
                                    <hr></hr>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </>


    )
}

export default Skills 