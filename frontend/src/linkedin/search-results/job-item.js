import React from 'react'

const JobItem = ({job}) => {
  return (
    <li className='list-group-item rounded-3 shadow-sm'>
        <div className='row position-relative'>
            <div className='col'>
                <span className='fw-bold'>{job.title}</span>
            </div>
        </div>
    </li>
  )
}

export default JobItem