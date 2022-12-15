import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { findJobsBySearchTermThunk } from '../../services/jobs-thunks'
import JobItem from './job-item'
import { useEffect } from 'react'
import { useState } from 'react'

const JobsPage = () => {
    const params = useParams()
    const { jobs } = useSelector(state => state.jobs)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findJobsBySearchTermThunk(params.searchTerm))
    }, [])

    return (
        <>
            <div className='row'>
                <div className='col' />
                <div className='col'>
                    <ul className="nav nav-pills mb-2 mt-2 justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href={`/search-results/${params.searchTerm}`}>People</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold active" href={`/search-results/${params.searchTerm}/jobs`}>Jobs</a>
                        </li>
                    </ul>
                </div>
                <div className='col' />
            </div>
            <hr></hr>
            <div className='row'>
                <div className='col-2' />
                <div className='col mt-3'>
                    <ul className='list-group'>
                        {jobs &&
                            jobs.map((job) =>
                                <JobItem key={job.id} job={job} />
                            )
                        }
                    </ul>
                </div>
                <div className='col-2' />
            </div>
        </>
    )
}

export default JobsPage