import React from 'react';
import {BrowserRouter,Route ,Switch} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import HomeScreen from './components/HomeScreen'
import Feed from './components/feed/Feed'
import Privacy from './components/Privacy'
import GeneralSettings from './components/GeneralSettings'
import Profilepage from './components/Profilepage'
import ReviewBox from './components/ReviewBox'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component ={HomeScreen} />
        <Route  path="/login" component ={Login} />
        <Route  path="/home" component ={Feed} />
        <Route  path="/GeneralSettings" component ={GeneralSettings} />
        <Route  path="/Profilepage" component ={Profilepage} />
        <Route  path="/Privacy" component ={Privacy} />
        <Route path="/register" component ={Register} />
        <Route path="/Feedback" component ={ReviewBox} />

      </Switch>
    </BrowserRouter>
  );
}
export default App;
