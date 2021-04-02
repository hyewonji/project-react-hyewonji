import React, { useState, useEffect } from "react";

import HelmetComponent from "../components/HelmetComponent";

import NavBar from "../components/NavBar";

import FormTemplate from "../components/FormTemplate";

import { useAppState, useAppDispatch } from "../WeatherContext";



function Login(){
  
  const state = useAppState();
  console.log(state);
  const accounts = state.accounts;

  const dispatch = useAppDispatch();

  const [isLogin, setIsLogin] = useState(false);
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const chkEmail = (str) => {
      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return regExp.test(str) ? true : false;
    };

    const chkPassword = (str) => {
      return str.length >= 6 ? true : false;
    };

    if (chkEmail(email) === false) {
      alert("Error: The Email Address Is Badly Formatted.");
    } else if (chkPassword(password) === false) {
      alert("Error: Minimum Password Length is 6");
    } else {
      const userIdCheck = accounts.filter((user) => {
        return user.email === email;
      });
      if (userIdCheck.length === 0) {
        alert("회원정보가 존재하지 않습니다.");
      } else {
        const userPassword = userIdCheck.filter((user) => {
          return user.password === password;
        });

        if (userPassword.length === 0) {
          alert("비밀번호가 틀렸습니다.");
        } else {
          dispatch({
            type: 'POST_LOGIN', 
            login: userPassword[0]
          });
          setIsLogin(true);
          alert(`Hello ${email} :)`);

        }
      }


    }
  };

  return (
    <>
      <HelmetComponent title="Login"></HelmetComponent>
      <NavBar />
      <FormTemplate
        onPage="login"
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        isLogin={isLogin}
      ></FormTemplate>
    </>
  );
};

export default Login;
