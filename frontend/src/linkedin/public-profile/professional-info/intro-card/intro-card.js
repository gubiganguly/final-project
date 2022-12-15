import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { updateUserThunk, updateCurrentUserThunk } from '../../../../services/users-thunks'
import { useParams } from 'react-router-dom'

const IntroCard = ({ profile }) => {

    const {currentUser} = useSelector(state => state.users)

    const params = useParams()



    const createConnection = () => {
        // dispatch(createConnectionThunk())
        let data = {"connectionCount": 1}
        //dispatch(updateCurrentUserThunk(data)) // update current user follow count
        //dispatch(updateUserThunk('6398297665cd518863ae419c', {"connectionCount": 1})) // update public user follow count 
    }

    return (
        <>
            <div className='list-group-item rounded-2 shadow-sm position-relative'>
                <div className='row'>
                    <div className='col position-relative'>
                        <img className='profilePic rounded-circle border border-4 ms-5' width={125} src={profile.image} alt='' />
                        { currentUser &&
                            <button className='rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold border-0 position-absolute' style={{right: 20}} onClick={createConnection}>Follow</button>
                        }
                    </div>
                </div>
                <div className='row ms-5 mt-2' >
                    <span className='fw-bolder' style={{ fontSize: "25px" }}>{profile.firstName} {profile.lastName}</span>
                    <span className='fw-normal' style={{ fontSize: "17px" }}>{profile.position}</span>
                    <span className='fw-light' style={{ fontSize: "13px" }}>{profile.city}, {profile.state}, {profile.country}</span>
                    <div className='row'>
                        <Link className='fw-bold text-primary text-decoration-none float-start col' style={{ fontSize: "15px" }}>Connections {profile.connectionCount}</Link>
                        <Link className='fw-bold text-success text-decoration-none float-start col' style={{ fontSize: "15px" }} to={`/posts/${profile._id}`}>Posts {profile.postCount}</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default IntroCard