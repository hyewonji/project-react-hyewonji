import React, { useState } from "react";
import axios from 'axios';
import FormTemplate from "../components/FormTemplate";
import NavBar from "../components/NavBar";
import HelmetComponent from "../components/HelmetComponent";
import { useAppState, useAppDispatch, useAppNextId } from '../WeatherContext';

function Signup(){
  const [signup,setSignup] = useState(false);
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
  const state =useAppDispatch();

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

      setSignup(true);
    }
  };

  return (
    <>
      <HelmetComponent title="Signup" />
      <NavBar />
      <FormTemplate 
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        signup={signup}
      ></FormTemplate>
    </>
  );
};

export default Signup;