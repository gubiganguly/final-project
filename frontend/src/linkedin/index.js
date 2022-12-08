import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Landing from './landing';
import Navbar from './navbar';
import Home from './home';
import MyProfile from './my-profile';
import CreateProfile from './create-profile/email-password';
import AddExperience from './create-profile/add-experience';
import Jobs from './jobs';
import "./index.css"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import postReducer from './reducers/post-reducer';
import profileReducer from './reducers/profile-reducer'

const store = configureStore(
  {
    reducer: { currentUser: profileReducer, post: postReducer }
  });

const LinkedIn = () => {

  const loggedIn = true;

  return (
    <>
      {/* {loggedIn && <Landing/>}
      {!loggedIn && <Landing/>} */}
      <Provider store={store}>
        <BrowserRouter>

          {!loggedIn &&
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/create-profile" element={<CreateProfile />} />
              <Route path="/create-profile/add-experience" element={<AddExperience />} />
            </Routes>
          }
          {loggedIn &&
            <div>
              <Navbar />
              <div className='container' >
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/network" element={<h1>Network</h1>} />
                  <Route path="/my-profile" element={<MyProfile />} />
                  <Route path="/jobs" element={<Jobs />} />
                </Routes>
              </div>
            </div>

          }
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default LinkedIn