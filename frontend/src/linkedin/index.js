import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Navbar from './navbar';
import Home from './home';


const LinkedIn = () => {
  return (
      <BrowserRouter>
        <Navbar active='home'/>
        <div className='container'>
          
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>

        </div>
      </BrowserRouter>
  )
}

export default LinkedIn