import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
    }
    html,
    body{
        margin:0;
        width: 100%;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        box-sizing: border-box;
        background: -webkit-linear-gradient(-1deg, rgb(255, 248, 129), rgb(109, 237, 255));
        background: linear-gradient(-1deg, rgb(255, 248, 129), rgb(109, 237, 255));
        
    }

    a{
        text-decoration: none;
    }

    input{
        &:focus{
            outline:none;
        }
    }

`

export default GlobalStyles;