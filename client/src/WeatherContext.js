import React, { createContext, useContext, useReducer, useRef } from 'react';


const initialList = {
    accounts: [
        {
            id: 1,
            email: "hyewon@naver.com",
            password: "123456",
            city: ['Rome','Paris']
        },
        {
            id: 2,
            email: "hyewon@naver.com",
            password: "1234567",
            city: ['Seoul']
        },
        {
            id: 3,
            email: "hyewon@naver.com",
            password: "1234568",
            city: []
        }
    ],
    login : {
    }
}

function Reducer(state, action){
    switch(action.type){
        case 'ADD_CITY':
            state.login.city.push(action.city);
            state.accounts[state.login.id-1] = state.login;
            return state;
        case 'POST_LOGIN':
            state.login = action.login;
            return state;
        case 'POST_SIGNUP':
            state.accounts.push(action.signup);
            return state;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const StateContext = createContext();
const DispatchContext = createContext();
const NextIdContext = createContext();

export function Provider({ children }){
    const [state, dispatch] = useReducer(Reducer, initialList)
    const nextId = useRef(4);

    return(
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <NextIdContext.Provider value={nextId}>
                    {children}
                </NextIdContext.Provider>
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

export function useAppState(){
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('Cannot find Provider');
    }
    return context;
}

export function useAppDispatch(){
    const context = useContext(DispatchContext);
    if(!context){
        throw new Error('Cannot find Provider');
    }
    return context;
}

export function useAppNextId(){
    const context = useContext(NextIdContext);
    if (!context) {
        throw new Error('Cannot find Provider');
    }
    return context;
}