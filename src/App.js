import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FreeCourse from './pages/freecourse';
import JobInternship from './pages/jobinternship';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Profile from './pages/profile';
import Newpost from './pages/newpost';
import Singlecoursepost from './pages/singlecoursepost';
import Search from './pages/search';
import Home from './pages/home';
import Bookmarks from './pages/bookmarks';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react'; // hello

import 'react-toastify/dist/ReactToastify.css';
import { axiosInstance } from './util/axiosInstance';
import { Singljipost } from './pages/singljipost';
import { AuthProvider } from './Auth/AuthContext';
import { AccessTokenShell } from './Auth/AccessTokenShell';
import { ProtectedWhenLogin } from './Auth/ProtectedWhenLogin';
import { AuthenticatedRoute } from './Auth/AuthenticatedRoute';

function App() {
  return (
    <AuthProvider>
      <AccessTokenShell>
        <div>
          <Router>
            <AppRoute />
          </Router>
          <ToastContainer theme="colored" />
        </div>
      </AccessTokenShell>
    </AuthProvider>
  );
}

export default App;

const AppRoute = () => {
  return (
    <Switch>
      <ProtectedWhenLogin exact component={Home} path="/" />
      <Route exact path="/freecourse">
        <FreeCourse />
      </Route>
      <Route exact path="/job-internship">
        <JobInternship />
      </Route>
      <ProtectedWhenLogin exact component={Signup} path="/signup" />
      <ProtectedWhenLogin exact component={Signin} path="/signin" />
      <AuthenticatedRoute exact component={Newpost} path="/newpost" />
      <Route exact path="/profile/:id">
        <Profile />
      </Route>
      <Route exact path="/freecourse/:id">
        <Singlecoursepost />
      </Route>
      <Route exact path="/job-internship/:id">
        <Singljipost />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <AuthenticatedRoute exact component={Bookmarks} path="/bookmarked" />
    </Switch>
  );
};
