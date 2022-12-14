import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { findUserByIdThunk } from '../../services/users-thunks'
import ProfessionalInfo from './professional-info'
import { useSelector } from 'react-redux'

const PublicProfile = () => {

    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findUserByIdThunk(params.uid))
    }, [])

    const { publicProfile, loading } = useSelector(state => state.users)

    return (
        <>
            {   
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            { publicProfile &&
                <div className='row'>
                    <div className='col-2' />
                    <div className='col-8 mt-4'>
                        <ProfessionalInfo profile={publicProfile} />
                    </div>
                </div>
            }
        </>
    )
}

export default PublicProfile 