//import { getRoles } from "@testing-library/react";
import React, { Component, Fragment } from "react";
//import { HashRouter, Route } from "react-router-dom";
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';



class Login extends Component {

  state = {
    email:'',
    password:'',
    userInfo : {
      email : 'hyewon@naver.com',
      password : '123456'
    }
  }

  handleEmailChange = (e) => {
    this.setState({
      email : e.target.value
    });
    console.log(this.state.email)
  }

  handlePasswordChange = (e) => {
    this.setState({
      password : e.target.value
    });
    console.log(this.state.password)
  }
  
  handleSubmit = () => {
    const {email, password, userInfo} = this.state;
    const chkEmail = (str) => {
      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return regExp.test(str) ? true : false;
    };
    const chkPassword = (str) => {
      return str.length >= 6 ? true : false; 
    };
    if (chkEmail(email) === false){
      alert("Error: The Email Address Is Badly Formatted.")
    } else if (chkPassword(password) === false){
      alert("Error: Minimu Password Length is 6")
    } else {
      if (email !== userInfo.email) {
        alert("Check Email Please")
      } else if ( password !== userInfo.password){
        alert("Password Wrong")
      } else {
        alert("Login succes")
        return true;
      }
    };
  }

  render(){
    return (
      <Fragment>
        <LoginForm 
          onEmailChange={this.handleEmailChange} 
          onPasswordChange={this.handlePasswordChange} 
          onSubmit={this.handleSubmit}></LoginForm>
      </Fragment>
    );
  }
}

export default Login;
