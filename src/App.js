import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Default from './components/Default';
import SignIn from './components/SignIn';
import {loadUser} from './actions/auth.action'
import store from './store';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render(){
  return (
    <React.Fragment>
        <Navbar></Navbar>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
        <Route path="/SignIn" component={SignIn}></Route>
        <Route component={Default}></Route>
        </Switch>     
      </React.Fragment>
  );
  };
}

export default App;
