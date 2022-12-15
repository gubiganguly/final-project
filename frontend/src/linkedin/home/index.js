import React from 'react'
import Explore from './explore'
import ProfileStats from './profile-stats'
import { useSelector } from 'react-redux'

const Home = () => {
  const { currentUser } = useSelector(state => state.users)
  return (
    <div className='row'>
      <div className="col-2">
        {currentUser &&
          <ProfileStats user={currentUser}/>
        }
      </div>
      <div className="col-8">
        <Explore />
      </div>
      <div className="col-2">

      </div>
  
    </div>
  )
}

export default Home