// import { getRoles } from "@testing-library/react";
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Home from './routes/Home';
import Add from './routes/Add';

const GlobalStyle = createGlobalStyle`
html,
body{
  margin:0;
  width: 100%;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background: -webkit-linear-gradient(-1deg, rgb(255, 248, 129), rgb(109, 237, 255));
  background: linear-gradient(-1deg, rgb(255, 248, 129), rgb(109, 237, 255));
}
`

function App () {
  return (
    <HashRouter>
      <GlobalStyle/>
      <Route path = '/' exact={true} component={Login}></Route>
      <Route path = '/home' component={Home}></Route>
      <Route path = '/signup' component={Signup}></Route>
      <Route path = '/add' component={Add}></Route>
    </HashRouter>
  )
}


export default App;