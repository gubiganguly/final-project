import React from 'react'
import "./index.css";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => {

  const location = useLocation().pathname.split("/")[1]

  const profile = useSelector(state => state.currentUser)

  return (
    <div className='navbar row pb-0 pt-0'>

      <Link className='col-2 logoLink' to="/home">
        <img className='logo' alt='' src='/images/logo.png' width={50}/>
      </Link>


      <div className="searchbar col-4 position-relative">
        <input placeholder="Search"
          className="form-control rounded-3 ps-5 border-light" style={{backgroundColor: "#DCEBF5"}}/>
          <i className="fa-solid fa-magnifying-glass position-absolute wd-nudge-up text-secondary"></i>
       
      </div>

      <div className="links col-6">
        <ul className="nav float-end me-5">

          <li className={`nav-item ${location === '' ? 'active' : ''}`}>
            <Link className="nav-link pb-0" to="/home"><i className="fa-solid fa-house-chimney" style={{color:"#97A2A8", fontSize:"18px"}}></i></Link>
            <span className='supporting-text'>Home</span>
          </li>
          <li className={`nav-item ${location === 'network' ? 'active' : ''}`}>
            <Link className="nav-link pb-0" to="/network"><i className="fa-solid fa-people-group" style={{color:"#97A2A8", fontSize:"18px"}}></i></Link>
            <span className='supporting-text'>Network</span>
          </li>
          <li className={`nav-item ${location === 'messages' ? 'active' : ''}`}>
            <Link className="nav-link pb-0" to="/jobs"><i className="fa-solid fa-briefcase" style={{color:"#97A2A8", fontSize:"18px"}}></i></Link>
            <span className='supporting-text'>Jobs</span>
          </li>
          <li className={`nav-item ${location === 'notifications' ? 'active' : ''}`}>
            <Link className="nav-link pb-0" to="/notifications"><i className="fa-solid fa-bell" style={{color:"#97A2A8", fontSize:"18px"}}></i></Link>
            <span className='supporting-text'>Notifications</span>
          </li>
          <li className={`nav-item`}>
            <Link className="nav-link pb-0" to="/my-profile">
              <img src={profile.image} alt ='' className='profile-image' />
            </Link>
            <span className='supporting-text'>Me</span>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default Navbar