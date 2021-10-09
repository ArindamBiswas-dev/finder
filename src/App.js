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
// import Test from './pages/test';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/freecourse">
          <FreeCourse />
        </Route>
        <Route exact path="/job-internship">
          <JobInternship />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/newpost">
          <Newpost />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
        <Route exact path="/freecourse/:id">
          <Singlecoursepost />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        {/* <Route exact path="/test">
          <Test />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
