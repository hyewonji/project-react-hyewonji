import React, { Component } from "react";
import LoginTemplate from "./components/LoginTemplate";
import Form from "./components/Form"

class App extends Component {
  id = 1
  userInfo = {
    email: 'hyewon@gmail.com',
    password: '123456'
  }

  state = {
    email: '',
    password: ''
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    if (this.state.email === this.userInfo.email && this.state.password === this.userInfo.password) {
      alert("Login Success!")
    } else if (this.state.email === this.userInfo.email && this.state.password !== this.userInfo.password) {
      alert("Check Your Password")
    } else {
      alert("Check Your Email")
    }
  }

  render() {
    const { email, password } = this.state;
    const {
      handleSubmit,
      handleEmailChange,
      handlePasswordChange
    } = this;
    return (
      <LoginTemplate form={<Form
        email={email}
        password={password}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
      />}>

      </LoginTemplate>
    );
  }
}
/*
component : HTML을 반환하는 함수 
props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값
*/

export default App;
