import { keyframes } from 'styled-components';

export const fadein = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const slideUp = keyframes`
    0% {
        transform: translateY(50%);
    }
    100% {
        transform: translateY(0);
    }
`

export const slideDown = keyframes`
    0% {
        transform: translateY(-50%);
    }
    100% {
        transform: translateY(0);
    }
`

export const slideUpLittle = keyframes`
    0% {
        transform: translateY(30%);
    }
    100% {
        transform: translateY(0);
    }
`

export const slideRight = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`


export const slideLeft = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`