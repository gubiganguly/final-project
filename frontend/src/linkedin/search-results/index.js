import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { findUsersByNameThunk } from '../../services/users-thunks'
import SearchItem from './search-item'
import { findJobsBySearchTermThunk } from '../../services/jobs-thunks'
import { useState } from 'react'
import JobItem from './job-item'

const SearchResults = () => {
    const params = useParams()

    const { users, loading } = useSelector(state => state.users)
    const { jobs } = useSelector(state => state.jobs)
    const [jobs2, setJobs] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findUsersByNameThunk(params.searchTerm))
        dispatch(findJobsBySearchTermThunk(params.searchTerm)).then(res => setJobs(res.payload.results))
    }, [])

    console.log(jobs)
    return (
        <>
            <div className='row'>
                <div className='col-6'>
                    <ul className='list-group mt-3'>
                        {
                            loading &&
                            <li className="list-group-item">
                                Loading...
                            </li>
                        }
                        {
                            users.map((user) =>
                                <SearchItem key={user._id} user={user} />
                            )
                        }
                    </ul>
                </div>
                <div className='col-6 mt-3'>
                    <ul className='list-group'>
                        {jobs &&
                            jobs.map((job) =>
                                <JobItem key={job.id} job={job}/>
                            )
                        }
                    </ul>
                </div>
            </div>

        </>
    )
}

export default SearchResults