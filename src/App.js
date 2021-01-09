// import { getRoles } from "@testing-library/react";
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import LoginForm from "./components/LoginForm";
import Login from './routes/Login';
import Signup from './routes/Signup';
import Home from './routes/Home';

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
      <Route path = '/' exact={true} component={Home}></Route>
      <Route path = '/login' component={Login}></Route>
      <Route path = '/signup' component={Signup}></Route>
    </HashRouter>
  )
}


export default App;