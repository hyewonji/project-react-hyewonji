import React from 'react';

import styled from 'styled-components';

import { slideUp, fadein } from './keyframe';

import { BsPlus } from 'react-icons/bs';

import { Link } from 'react-router-dom';


const MainBox = styled.main`
    display:flex;
    flex-direction: column;
    justify-content:top;
    align-items:center;
    width: 370px;
    height: 550px;
    border-radius:30px;
    background: white;
    text-decoration:none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    animation: 1.20s ease-in-out ${slideUp},2s ease-in-out ${fadein};
`

const AddCity = styled.div`
    font-size:15px;
    padding: 30px;
`
const PlusIcon = styled.div`
    width:150px;
    height:150px;
    border-radius:75px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 150px;
    color: #7FFFCC;
    background: #F6F8FF;
`

function HomeForm(){
    return(
        <Link to='/add'> 
            <MainBox>
                <AddCity>ADD CITY</AddCity>
                <PlusIcon><BsPlus/></PlusIcon>
            </MainBox>
        </Link>
    )
};

export default HomeForm;