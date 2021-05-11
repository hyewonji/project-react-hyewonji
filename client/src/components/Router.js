import React from "react";

import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import NavBar from "../components/NavBar";

import Login from '../routes/Login';

import Signup from '../routes/Signup';

import Home from '../routes/Home';

import Add from '../routes/Add';

import { useAppState } from "../WeatherContext";

function Router (){
  let state = useAppState();
  
  return(
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path = '/' exact={true} component={Login}></Route>
        <Route path = '/signup' component={Signup}></Route>
        {/*<AuthRoute
          authenticated={authenticated}
          path="/profile"
          render={props => <Profile user={user} {...props} />}
        />*/}
        <Route path = '/home' component={Home}></Route>
        <Route path = '/add' component={Add}></Route>
        {state.login.id ? <Redirect from = "/hello" to = "/" /> : <Redirect from = "/home" to = "/" />}
      </Switch>
    </HashRouter>
  )
};

export default Router;
