import React from 'react'
import "./index.css";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => {

  const location = useLocation().pathname.split("/")[1]

  const { currentUser } = useSelector(state => state.users)

  const [searchTerm, setSearchTerm] = useState()
  const navigate = useNavigate()
  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search-results/${searchTerm}`)
    }
  }

  return (
    <>
      {currentUser &&
        <div className='navbar row pb-0 pt-0'>

          <Link className='col-2 col-md-2 d-md-block d-sm-none logoLink' to="/home">
            <img className='logo' alt='' src='/images/logo.png' width={50} />
          </Link>


          <div className="col-4 col-lg-4 col-md-3 col-sm-4 searchbar position-relative">
            <input placeholder="Search"
              className="form-control rounded-3 ps-5 border-light"
              style={{ backgroundColor: "#DCEBF5" }}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyDown={enterHandler} />
            <i className="fa-solid fa-magnifying-glass position-absolute wd-nudge-up text-secondary"></i>

          </div>
          <div className="col-6 col-lg-6 col-md-7 col-sm-8 links">
            <ul className="nav float-end me-5">

              <li className={`nav-item ${location === '' ? 'active' : ''}`}>
                <Link className="nav-link pb-0" to="/home"><i className="fa-solid fa-house-chimney" style={{ color: "#97A2A8", fontSize: "18px" }}></i></Link>
                <span className='supporting-text'>Home</span>
              </li>
              <li className={`nav-item ${location === 'network' ? 'active' : ''}`}>
                <Link className="nav-link pb-0" to={`/network/${currentUser._id}/following`}><i className="fa-solid fa-handshake" style={{ color: "#97A2A8", fontSize: "18px" }}></i></Link>
                <span className='supporting-text'>Network</span>
              </li>
              <li className={`nav-item ${location === 'messages' ? 'active' : ''}`}>
                <Link className="nav-link pb-0" to="/jobs"><i className="fa-solid fa-briefcase" style={{ color: "#97A2A8", fontSize: "18px" }}></i></Link>
                <span className='supporting-text'>Jobs</span>
              </li>
              <li className={`nav-item ${location === 'notifications' ? 'active' : ''}`}>
                <Link className="nav-link pb-0" to="/notifications"><i className="fa-solid fa-bell" style={{ color: "#97A2A8", fontSize: "18px" }}></i></Link>
                <span className='supporting-text'>Notifications</span>
              </li>
              {currentUser.role === 'ADMIN' &&
                <li className={`nav-item ${location === 'all-users' ? 'active' : ''}`}>
                  <Link className="nav-link pb-0" to={`/all-users`}><i className="fa-solid fa-people-group" style={{ color: "#97A2A8", fontSize: "18px" }}></i></Link>
                  <span className='supporting-text'>Users</span>
                </li>
              }
              <li className={`nav-item`}>
                <Link className="nav-link pb-0" to="/profile">
                  <img src={currentUser.image} alt='' className='profile-image' />
                </Link>
                <span className='supporting-text'>Me</span>
              </li>
            </ul>
          </div>
        </div>
      }

      {!currentUser &&
        <div className='navbar row pb-0 pt-0'>
          <Link className='col-4  logoLink' to="/home">
            <img className='logo' alt='' src='/images/logo.png' width={50} />
          </Link>
          <div className="col-4 searchbar position-relative">
            <input placeholder="Search users or jobs"
              className="form-control rounded-3 ps-5 border-light"
              style={{ backgroundColor: "#DCEBF5" }}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyDown={enterHandler} />
            <i className="fa-solid fa-magnifying-glass position-absolute wd-nudge-up text-secondary"></i>

          </div>
          <div className="col-4 links">
            <Link className='rounded-2 btn btn-primary ps-3 pe-3 fw-bold border-0' to='/'>
              Log In
            </Link>
          </div>
        </div>
      }

    </>
  )
}

export default Navbar