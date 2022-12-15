import React from 'react'
import { Link } from 'react-router-dom'

const JobItem = ({job}) => {
  return (
    <li className='list-group-item rounded-3 shadow-sm mb-2'>
        <div className='row position-relative'>
            <div className='col caption'>
                <span className='fw-bold position-absolute ms-3' style={{left:0, fontSize:'23px'}}>{job.title} up to ${job.salary_max.toLocaleString()}</span>
                <br></br>
                <span className='fw-bold float-start ms-2 mt-2'>{job.location.display_name}</span>
                <br></br>
                <span className='float-start ms-2 mt-2'>{job.description}</span>
                                    <Link className='rounded-pill btn btn-primary float-end ps-3 pe-3 fw-bold border-0' 
                    to={job.redirect_url}>View</Link>
            </div>
        </div>
    </li>
  )
}

export default JobItem