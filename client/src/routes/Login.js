import React, { useState } from "react";

import HelmetComponent from "../components/HelmetComponent";

import FormTemplate from "../components/FormTemplate";

import { useAppState, useAppDispatch } from "../WeatherContext";



function Login({ history }){
  
  const state = useAppState();
  const accounts = state.accounts;

  const dispatch = useAppDispatch();

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
          alert(`Hello ${email} :)`);
          history.push('/home')
        }
      }


    }
  };

  return (
    <>
      <HelmetComponent title="Login" />
      <FormTemplate
        onPage="login"
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
      ></FormTemplate>
    </>
  );
};

export default Login;
