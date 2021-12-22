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
import { ProtectedWhenLogin } from './components/ProtectedWhenLogin';
import { axiosInstance } from './util/axiosInstance';
import { Singljipost } from './pages/singljipost';
import { Logout } from './pages/logout';

export const UserContext = React.createContext();
export const SetUserContext = React.createContext();
export const UserNameContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  const [username, setUserName] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchNewAccessToken = () => {
    console.log('fetching new access-token');
    setLoading(true);
    axiosInstance
      .get('/auth/newaccesstoken')
      .then((response) => {
        // console.log(response.data);

        setTimeout(() => {
          fetchNewAccessToken();
        }, 1000 * 60 * 60 - 1000);

        setUser(response.data.userId);
        setUserName(response.data.username);
        // console.log(response.data);
      })
      .catch((error) => {
        setUser(null);
      })
      .finally(() => {
        console.log('final block', user);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNewAccessToken();
  }, [user]);

  if (loading) {
    return <div></div>;
  }
  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        <UserNameContext.Provider value={{ username, setUserName }}>
          <div>
            <Router>
              <Switch>
                {/* <Route exact path="/">
                <Home />
              </Route> */}
                <ProtectedWhenLogin
                  exact
                  component={Home}
                  path="/"
                  user={user}
                />
                <Route exact path="/freecourse">
                  <FreeCourse />
                </Route>
                <Route exact path="/job-internship">
                  <JobInternship />
                </Route>
                {/* <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route> */}
                <ProtectedWhenLogin
                  component={Signup}
                  path="/signup"
                  user={user}
                />
                <ProtectedWhenLogin
                  component={Signin}
                  path="/signin"
                  user={user}
                />
                <Route exact path="/newpost">
                  <Newpost />
                </Route>
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
                <Route exact path="/bookmarked">
                  <Bookmarks />
                </Route>
                <Route exact path="/logout">
                  <Logout />
                </Route>
              </Switch>
            </Router>
            <ToastContainer theme="colored" />
          </div>
        </UserNameContext.Provider>
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
