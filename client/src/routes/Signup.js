import React, { useState } from "react";

import FormTemplate from "../components/FormTemplate";

import HelmetComponent from "../components/HelmetComponent";

import { useAppDispatch, useAppNextId } from '../WeatherContext';


function Signup({ history }){
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const dispatch = useAppDispatch();
  const nextId = useAppNextId();

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
      const userInfo = {
        id: nextId,
        email: email,
        password: password,
        city: []
      }

      dispatch({
        type: "POST_SIGNUP",
        signup: userInfo
      })
      dispatch({
        type: "POST_LOGIN",
        login: userInfo
      })

      alert(`Welcome ${userInfo.email}:)`);
      history.push('/home')
    }
  };

  return (
    <>
      <HelmetComponent title="Signup" />
      <FormTemplate 
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
      ></FormTemplate>
    </>
  );
};

export default Signup;