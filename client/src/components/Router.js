import React from "react";

import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Login from '../routes/Login';

import Signup from '../routes/Signup';

import Home from '../routes/Home';

import Add from '../routes/Add';

import { useAppState } from "../WeatherContext";

export default () => {
  const state = useAppState();
  
    return(
      <Router>
        <Switch>
          <Route path = '/' exact={true} component={Login}></Route>
          <Route path = '/signup' component={Signup}></Route>
          <Route path = '/home' component={Home}></Route>
          <Route path = '/add' component={Add}></Route>
          {state.login.id ? <Redirect from = "/hello" to = "/" /> : <Redirect from = "/home" to = "/" />}
        </Switch>
      </Router>
  )
};
