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
        width: 100vw;
        height: 100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        box-sizing: border-box;
        background: -webkit-linear-gradient(-1deg, rgb(255, 248, 129), rgb(109, 237, 255));
        background: linear-gradient(-1deg, rgb(255, 248, 129), rgb(109, 237, 255));
        overflow: scroll;
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