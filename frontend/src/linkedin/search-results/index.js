import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { findUsersByNameThunk } from '../../services/users-thunks'
import SearchItem from './search-item'

const SearchResults = () => {
    const params = useParams()

    const { users, loading } = useSelector(state => state.users)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findUsersByNameThunk(params.searchTerm))
    }, [])

    return (
        <>
            <div className='row'>
                <div className='col' />
                <div className='col'>
                    <ul className="nav nav-pills mb-2 mt-2 justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link fw-bold active" href={`/search-results/${params.searchTerm}`}>People</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href={`/search-results/${params.searchTerm}/jobs`}>Jobs</a>
                        </li>
                    </ul>
                </div>
                <div className='col'/>
            </div>
            <hr></hr>
            <div className='row'>
                <div className='col-3'/>
                <div className='col'>
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
                <div className='col-3'/>
            </div>

        </>
    )
}

export default SearchResults