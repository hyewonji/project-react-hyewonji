import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai'

const Main = styled.div`
    display:flex;
`

const CitySearchWrapper = styled.div`
    width: 465px;
    height:690px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius: 20px 0 0 20px;
    background: white;
`

const SearchCityInputWrapper = styled.div`
    position: relative;
    width: 80%;
    box-sizing: border-box;
`

const SearchCity = styled.input`
    width: 80%;
    padding: 1.5rem;
    border-radius: 3rem;
    outline: none;
    border: none;
    box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
    font-size: 1rem;
    color: #131F69;
    text-transform: uppercase;
`

const SearchCityBtn = styled.div`
    cursor: pointer;
    position: absolute;
    right: 0;
    top: -0.35rem;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    outline: none;
    border: none;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
    color: white;
    background-color: #31feae;
    font-size: 50px;
`

const CurrentCityWrapper = styled.div`
    width: 465px;
    height:690px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius: 0 20px 20px 0;
    color: white;
    background: gray;
`

const  CurrentTitle = styled.div`
    font-size:28px;
    font-weight: 600;
`

const CurrentWeatherCard = styled.div`
    width: 115px;
    height: 115px;
`

const  CurrentDegree = styled.div`
    font-size: 90px;
`

const CurrentCity = styled.div`
    font-size: 28px;
`

const CurrentWeatherName = styled.div`
    font-size: 15px;
`



function AddCurrent({ currentWeather, weatherCard }){
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US',{
        weekday: 'long',
        day: 'numeric',
        month: 'short'
    })


    return(
        <Main>
            <CitySearchWrapper>
                <SearchCityInputWrapper> 
                    <SearchCity placeholder="SEARCH CITY"></SearchCity>
                    <SearchCityBtn>
                        <AiOutlineSearch/>
                    </SearchCityBtn>
                </SearchCityInputWrapper>
            </CitySearchWrapper>

            <CurrentCityWrapper>
                
                <CurrentTitle>Here We Are!</CurrentTitle>
                <h3>{dateString}</h3>
                <CurrentWeatherCard>{weatherCard(currentWeather.main)}</CurrentWeatherCard>
                <CurrentDegree>{currentWeather.temperature}°</CurrentDegree>
                <CurrentCity>{currentWeather.name}</CurrentCity>
                {currentWeather.main}
                <CurrentWeatherName></CurrentWeatherName>
                
            </CurrentCityWrapper>
        </Main>
    )
};

export default AddCurrent;