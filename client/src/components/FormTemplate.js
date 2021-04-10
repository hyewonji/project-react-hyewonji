import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { slideDown, slideUpLittle, slideRight, fadein } from './keyframe';


const InputMain = styled.main`
    margin-top: 100px;
    margin-bottom: 50px;
    display:flex;
    width: 80vw;
    height: 83vh;
    animation: 5s ease-in-out ${fadein};
`

const InputLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    border-radius: 13px 0 0 13px;
    background-color: #FFFFFF;
    z-index: 10;
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
    animation: 2s ease-in-out ${slideDown},2s ease-in-out ${fadein};
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
    animation: 2s ease-in-out ${slideDown},2s ease-in-out ${fadein};
    &:focus{
        outline:none;
    }
`

const SLinkBtn = styled(Link)`
    width: 120px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    border:none;
    border-radius:25px;
    background: #31feae;
    color:white;
    font-size: 17px;
`

const InputImage = styled.div`
    background: #FFFFFF;
    width: 60%;
    display: flex;
    flex-direction: column;
    border-radius: 0 13px 13px 0;
    @media screen and (max-width: 768px) {
        display:none;
    }
`

const Img = styled.img`
    width: 100%;
    height:100%;
    border-radius: 0 13px 13px 0;
    background: center center/cover no-repeat;
    animation: ${fadein} 5s ease-in-out;
`

const ChangeToSignup = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;
    text-decoration:none;
    animation: 2s ease-in-out ${slideUpLittle},2s ease-in-out ${fadein};
`

const SLink = styled(Link)`
    color: #FF3A82;
`

const Greeting = styled.div`
    font-size: 45px;
    font-weight: 600;
    color: white;
    position: absolute;
    bottom: 230px;
    margin-left: 35px;
    animation: ${slideRight} 1.5s ease-in-out, ${fadein} 2s ease-out;
`

function handlePage(onPage){
    if(onPage === 'login'){
        return true;
    } else {
        return false;
    }
}

function FormTemplate({onPage, onEmailChange, onPasswordChange, onSubmit, isLogin, signup}){
    const Login = handlePage(onPage);
    const url = "https://source.unsplash.com/random/1200x900?mountain";

    return (
        <InputMain>
            <InputLeft>
                <InputForm onSubmit={onSubmit}>
                    <InputTitle>
                        { Login ? "Login" : "Signup" }
                    </InputTitle>
                    <Input type='email' onChange={onEmailChange}></Input>
                    <Input type='password' onChange={onPasswordChange}></Input>
                    {isLogin
                        ? <SLinkBtn to='/home'>
                                Home!
                            </SLinkBtn>
                        : (signup 
                            ? <SLinkBtn to='/home'>
                                Home!
                                </SLinkBtn>
                            : <SubmitBtn 
                                type='submit' 
                                value= { Login ? "Login" : "Signup" } 
                                onClick={onSubmit} />)
                    }
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
            <InputImage>
                    <Img src={url} />
                    <Greeting>Welcome Back!</Greeting>
            </InputImage>
        </InputMain>
    )
}

export default FormTemplate;