import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import { useMediaQuery } from 'react-responsive';

const InputMain = styled.main`
    margin-top: 70px;
    display:flex;
    width: 70vw;
    height: 80vh;
`

const InputLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    border-radius: 13px 0 0 13px;
    background-color: #FFFFFF;
    @media screen and (max-width: 768px) {
        width:100%;
        border-radius: 13px;
    }
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
    width: 75%;
    height: 60px;
    margin-bottom: 33px;
    padding-left: 25px;
    border-radius: 30px;
    border: none;   
    box-shadow: 0 0 2rem rgba(0,0,255,.3);
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
    background: #79b8ff;
    width: 60%;
    display: flex;
    flex-direction: column;
    border-radius: 0 13px 13px 0;
    @media screen and (max-width: 768px) {
        display:none;
    }
`

const ChangeToSignup = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;
    text-decoration:none;
`

const SLink = styled(Link)`
    color: #FF3A82;
`

function isLogin(onPage){
    if(onPage === 'login'){
        return true;
    } else {
        return false;
    }
}

function FormTemplate({onPage, onEmailChange, onPasswordChange, onSubmit}){
    const Login = isLogin(onPage)
    return (
        <InputMain>
            <InputLeft>
                <InputForm onSubmit={onSubmit}>
                    <InputTitle>
                        { Login ? "Login" : "Signup" }
                    </InputTitle>
                    <Input type='email' onChange={onEmailChange}></Input>
                    <Input type='password' onChange={onPasswordChange}></Input>
                    <SubmitBtn 
                        type='submit' 
                        value= { Login ? "Login" : "Signup" } >
                    </SubmitBtn>
                </InputForm>
                <ChangeToSignup>
                    { 
                    Login 
                    ? "Don't have an account?" 
                    : "Already Have an account?" 
                    }
                    <SLink to={ Login ? '/signup' : '/'} >
                        { Login ? "Signup" : "Login"}
                    </SLink>
                </ChangeToSignup>
            </InputLeft>
            <InputImage />
        </InputMain>
    )
}

export default FormTemplate;
