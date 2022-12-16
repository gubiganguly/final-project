import React from 'react'
import Explore from './explore'
import ProfileStats from './profile-stats'
import { useSelector } from 'react-redux'

const Home = () => {
  const { currentUser } = useSelector(state => state.users)
  return (
    <div className='row'>
      <div className="col-2 col-xxl-2 col-lg-3 d-none d-sm-none d-md-none d-lg-block">
        {currentUser &&
          <ProfileStats user={currentUser}/>
        }
      </div>
      <div className="col-8 col-xxl-8 col-lg-9 col-sm-12">
        <Explore />
      </div>
      <div className="col-2 col-xxl-2 d-none d-sm-none d-lg-none d-xl-block">
      </div>
  
    </div>
  )
}

export default Home