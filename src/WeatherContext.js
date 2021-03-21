import React, { createContext, useContext, useReducer, useRef } from 'react';

const initialWeathers = [
    {
        id: 1,
        city: 'Masan', 
        weather: 'Mist', 
        temp: 11, 
        temp_min: 8, 
        temp_max: 14
    },
    {
        id: 2,
        city: 'Seoul', 
        weather: 'Mist', 
        temp: 9, 
        temp_min: 9, 
        temp_max: 9
    }
]

function weatherReducer(state, action){
    switch(action.type){
        case 'CREATE':
            return state.concat(action.weather);
        default:
            throw new Error('Unhandled action type: ${action.type}');
    }
}

const WeatherStateContext = createContext();
const WeatherDispatchContext = createContext();
const WeatherNextIdContext = createContext();

export function WeatherProvider({ children }){
    const [state, dispatch] = useReducer(weatherReducer, initialWeathers)
    const nextId = useRef(3);

    return(
        <WeatherStateContext.Provider value={state}>
            <WeatherDispatchContext.Provider value={dispatch}>
                <WeatherNextIdContext.Provider value={nextId}>
                    {children}
                </WeatherNextIdContext.Provider>
            </WeatherDispatchContext.Provider>
        </WeatherStateContext.Provider>
    );
}

export function useWeatherState(){
    const context = useContext(WeatherStateContext);
    if (!context) {
        throw new Error('Cannot find WeatherProvider');
    }
    return context;
}

export function useWeatherDispatch(){
    const context = useContext(WeatherDispatchContext);
    if(!context){
        throw new Error('Cannot find WeatherProvider');
    }
    return context;
}

export function useWeatherNextId(){
    const context = useContext(WeatherNextIdContext);
    if (!context) {
        throw new Error('Cannot find WeatherProvider');
    }
    return context;
}