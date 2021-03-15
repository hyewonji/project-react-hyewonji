import React, { useState } from "react";
import HelmetComponent from "../components/HelmetComponent";
import NavBar from "../components/NavBar";
import FormTemplate from "../components/FormTemplate";

const userLists = [
  {
    id: 1,
    email: "hyewon@naver.com",
    password: "123456",
  },
  {
    id: 2,
    email: "hyewon@naver.com",
    password: "1234567",
  },
  {
    id: 3,
    email: "hyewon@naver.com",
    password: "1234568",
  },
];

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setUserLogin({
      ...userLogin,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setUserLogin({
      ...userLogin,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const email = userLogin.email;
    const password = userLogin.password;

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
      const userIdCheck = userLists.filter((user) => {
        return user.email === email;
      });

      if (userIdCheck.length === 0) {
        alert("회원정보가 존재하지 않습니다.");
      } else {
        const userPassword = userIdCheck.filter((user) => {
          return user.password === password;
        });

        if (userPassword.length === 0) {
          alert("비밀번호가 잘못되었습니다.");
        } else {
          alert("로그인되었습니다!");
          setIsLogin(true);
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
