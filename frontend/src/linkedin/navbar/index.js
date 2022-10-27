import React from 'react'
import "./index.css";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { AiFillHome } from 'react-icons/ai';
import { FaSuitcase } from 'react-icons/fa';
import { BsBellFill } from 'react-icons/bs';
import { BiTask } from 'react-icons/bi';


const Navbar = () => {

  return (
    <div className='navbar row pb-1 pt-1'>

      <Link className='col-2 logoLink' to="/">
        <img className='logo' src='logo.png' />
      </Link>


      <div className="searchbar col-6 position-relative">
        <input placeholder="Search"
          className="form-control rounded-3 ps-5 border-light" />
        <i className="bi bi-search position-absolute wd-nudge-up"></i>
      </div>

      <div className="links col-4">
        <ul className="nav">

          <li className="nav-item">
            <Link className="nav-link pb-0" to="/"><AiFillHome size={25} color="#c1c3c6" /></Link>
            <span className='supporting-text'>Home</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link pb-0" to="/jobs"><FaSuitcase size={25} color="#c1c3c6" /></Link>
            <span className='supporting-text'>Jobs</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link pb-0" to="/tasks"><BiTask size={25} color="#c1c3c6" /></Link>
            <span className='supporting-text'>Tasks</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link pb-0" to="/notifications"><BsBellFill size={25} color="#c1c3c6" /></Link>
            <span className='supporting-text'>Notifications</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link pb-0" to="/my-profile">
              <img src="/images/profile.jpeg" className='profile-image' />
            </Link>
            <span className='supporting-text'>Me</span>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default Navbar