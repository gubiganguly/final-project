import React from 'react'
import Explore from './explore'
import ProfileStats from './profile-stats'
import Calander from './calander'

const Home = () => {
  return (
    <div className='row'>
      <div className="col-2">
        <ProfileStats />
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