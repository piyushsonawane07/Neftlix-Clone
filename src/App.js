import './App.css'
import Landing from './components/Landing/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Signin from './components/Siginin/Signin';
import SlideOne from './components/Signup/SlideOne';
import SlideTwo from './components/Signup/SlideTwo';
import SlideThree from './components/Signup/SlideThree';
import SlideFour from './components/Signup/SlideFour';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ManageProfile from './components/Home/ManageProfile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/signin">
          <Signin/>
        </Route>
        <Route exact path="/signup">
          <SlideOne/>
        </Route>
        <Route exact path="/slidetwo">
          <SlideTwo/>
        </Route>
        <Route exact path="/slidethree">
          <SlideThree/>
        </Route>
        <Route exact path="/slidefour">
          <SlideFour/>
        </Route>
        <Route exact path="/userprofile">
          <Profile/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/manage-profile">
          <ManageProfile/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
