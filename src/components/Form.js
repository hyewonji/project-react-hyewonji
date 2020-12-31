import React, { Component } from 'react'
import './Form.css'

const Form = ({ email, password, onEmailChange, onPasswordChange, onSubmit, onKeyPress }) => {
    return (
        <div className="form">
            <div className="title">Login</div>
            <input type="email" value={email} onChange={onEmailChange} onKeyPress={onKeyPress} />
            <input type="password" value={password} onChange={onPasswordChange} onKeyPress={onKeyPress} />
            <div className="login-btn" onClick={onSubmit}>Login</div>
        </div>
    );
}

export default Form;