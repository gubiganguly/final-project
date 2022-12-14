import React from 'react'
import { useParams } from 'react-router'

const PublicProfile = () => {
    const params = useParams()
    return (
        <div className='row'>
            <div className='col-2' />
            <div className='col-8 mt-4'>
                <h1>{params.uid}</h1>
            </div>
        </div>
    )
}

export default PublicProfile