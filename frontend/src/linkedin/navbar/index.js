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
    <div className='navbar row'>

      <Link className='col-2 logoLink' to="/">
        <img className='logo' src='logo.png' />
      </Link>


      <div className="searchbar col-6 position-relative">
        <input placeholder="Search"
          className="form-control rounded-3 ps-5 border-light" />
        <i className="bi bi-search position-absolute wd-nudge-up"></i>
      </div>

      <div className="links col-4">
        <ul className="nav nav-pills mb-2 ">
          <li className="nav-item">
            <Link className="nav-link" to="/"><AiFillHome size={22} color="#c1c3c6" /></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobs"><FaSuitcase size={25} color="#c1c3c6" /></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tasks"><BiTask size={25} color="#c1c3c6" /></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notifications"><BsBellFill size={25} color="#c1c3c6" /></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/my-profile">
              <img src="/images/profile.jpeg" className='profile-image' />
            </Link>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default Navbar