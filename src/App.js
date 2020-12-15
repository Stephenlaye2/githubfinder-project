import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import About from './component/pages/About';
import Home from './component/pages/Home';
import SingleUser from './component/users/SingleUser';
import Alert from './component/layout/Alert';
import GithubState from './context/github/GithubState';
import  AlertState  from './context/alert/AlertState';
import './App.css';
import NotFound from './component/pages/NotFound';

const App = () => {
 
  return (
    <GithubState>
    <AlertState>
    <Router>
    <div className = "App" >
    <Navbar />
        <div className = "container" >
        <Alert />
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = '/user/:login' component = {SingleUser}
        />
        <Route component = {NotFound} />
    </Switch>
        </div>
    <Footer />     
    </div>
    </Router>
    </AlertState>
    </GithubState>
  );
}
// }

export default App;
