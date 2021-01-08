import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InputMain = styled.main`
    display:flex;
    width: 75vh;
    height: 80vh;
`

const InputLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35vw;
    border-radius: 13px 0 0 13px;
    background-color: #FFFFFF;
`

const InputTitle = styled.div`
    margin:0;
    margin-bottom: 55px;
    font-size: 40px;
    color: #0C1066;
`

const InputForm = styled.form` 
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
` 

const Input = styled.input`
    width: 70%;
    height: 60px;
    margin-bottom: 33px;
    padding-left: 25px;
    border-radius: 30px;
    border: none;   
    box-shadow: 0 0 2rem rgba(0,0,255,.3);
    &:focus{
        outline:none;
    }
`

const SubmitBtn = styled.input`
    width: 120px;
    height: 50px;
    margin-bottom: 50px;
    border:none;
    border-radius:25px;
    background-color: #D3D3D3;
    color:white;
    font-size: 17px;
    &:focus{
        outline:none;
    }
`

const InputImage = styled.div`
    background: gray;
    width: 70%;
    display: flex;
    flex-direction: column;
    border-radius: 0 13px 13px 0;
`

const ChangeToSignup = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;
    text-decoration:none;
`


function SignupForm({onEmailChange, onPasswordChange, onSubmit}){

    return (
        <InputMain>
            <InputLeft>
                <InputForm>
                    <InputTitle>Signup</InputTitle>
                    <Input type='email' onChange={onEmailChange}></Input>
                    <Input type='password' onChange={onPasswordChange}></Input>
                    <SubmitBtn type='button' value='Signup' onClick={onSubmit} >
                    </SubmitBtn>
                </InputForm>
                <ChangeToSignup>
                    <span>Already Have an account?</span>
                    <Link to='/login' style={{color:'#FF3A82', textDecoration:'none'}}>Login</Link>
                </ChangeToSignup>
            </InputLeft>
            <InputImage></InputImage>
        </InputMain>
    )
}

export default SignupForm;
