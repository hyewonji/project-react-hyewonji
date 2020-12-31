import { render } from "@testing-library/react";
import React from "react";
import "./LoginTemplate.css";

const LoginTemplate = ({ form, signup, images }) => {
    return (
        <main class="main">
            <div class="js-logIn">
                <section className="form-wrapper">
                    {form}
                </section>
                <section class="logIn signup">
                    {signup}
                </section>
            </div>
            <div class="js-img">
                {images}
            </div>
        </main>
    );
}

export default LoginTemplate