import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from '../routes/Login';
import Signup from '../routes/Signup';
import Home from '../routes/Home';
import Add from '../routes/Add';
import LandingPage from "./LandingPage";

export default () => (
    <Router>
      <Switch>
        <Route path = '/' exact={true} component={Login}></Route>
        <Route path = '/home' component={Home}></Route>
        <Route path = '/signup' component={Signup}></Route>
        <Route path = '/add' component={Add}></Route>
        <Route path = '/hello' component={LandingPage}></Route>
        {/*<Redirect from = "*" to = "/" />*/}
      </Switch>
    </Router>
);
