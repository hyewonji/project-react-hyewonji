import React from 'react';
import styled from 'styled-components';
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