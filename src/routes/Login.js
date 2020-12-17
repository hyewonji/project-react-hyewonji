import { render } from "@testing-library/react";
import React from "react";
import "./Login.css"

function Login() {
    return (
        <main class="main">
            <div class="js-logIn">
                <form class="logIn__form">
                    <h1 class="logIn title">Login</h1>
                    <input type="text" class="input eMail" name="userId" placeholder="Email"></input>
                    <input type="password" class="input password" name="password" placeholder="Password"></input>
                    <input type="button" onclick="check(this.form)" class="logIn_btn" value="Login"></input>
                </form>
                <div class="logIn signup">
                    <span class="signupQ">Don't have an account?</span>
                    <a href="#" onclick="window.location.reload(true);" class="signupBtn">SING UP</a>
                </div>
            </div>
            <div class="js-img">
                <h1 class="img greeting">Welcome Back!</h1>
                <h1 class="img underBar">_______</h1>
            </div>
        </main>
    );
}

export default Login