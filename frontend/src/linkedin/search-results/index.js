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
        console.log(dispatch(findUsersByNameThunk(params.searchTerm)))

    }, [])

    let xs = [1, 2, 3]

    return (
        <>
            <div className='row'>
                <div className='col-3' />
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
                <div className='col-3' />
            </div>

        </>
    )
}

export default SearchResults