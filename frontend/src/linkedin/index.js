import React, { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Landing from './landing';
import Navbar from './navbar';
import SearchResults from './search-results';
import Home from './home';

import MyProfile from './my-profile';
import PublicProfile from './public-profile';
import CreateProfile from './create-profile/email-password';
import AddExperience from './create-profile/add-experience';
import Jobs from './jobs';
import JobsPage from './search-results/jobs-page';
import "./index.css"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { useSelector } from 'react-redux';
import postReducer from './reducers/post-reducer';
import usersReducer from './reducers/users-reducer'
import jobsReducer from './reducers/jobs-reducer';
import CurrentUser from './currentUser';
import MyPosts from './my-posts';
import followsReducer from './reducers/follows-reducer'
import ProtectedRoute from './protected-route';
import Followers from './network/followers';
import Following from './network/following';
import AllUsers from './all-users';

const store = configureStore(
  {
    reducer: {  users: usersReducer,
                postData: postReducer,
                jobs: jobsReducer,
                follows: followsReducer}
  });

const LinkedIn = () => {

  const [loginInfo, setLoginInfo] = useState({})

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <CurrentUser>
            <div>
              <Navbar />
              <div className='container' >
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/create-profile" element={<CreateProfile setLoginInfo={setLoginInfo}/>} />
                  <Route path="/create-profile/add-experience" element={<AddExperience loginInfo={loginInfo}/>} />

                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<MyProfile />} />
                  <Route path="/profile/:uid" element={<PublicProfile />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/search-results/:searchTerm/jobs" element={<JobsPage />} />
                  <Route path="/search-results/:searchTerm" element={<SearchResults />} />
                  <Route path="/posts/:author" element={<MyPosts />} />
                  <Route path="/network/:uid/following" element={<Following />} />
                  <Route path="/network/:uid/followers" element={<Followers />} />
                  <Route path="/all-users" element={<AllUsers />} />
                </Routes>
              </div>
            </div>
          </CurrentUser>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default LinkedIn 