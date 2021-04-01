import React from 'react';
import styled from 'styled-components';
import { slideUp, fadein } from './keyframe';
import MainWeather from './MainWeather';

const CardWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    width: 370px;
    height: 550px;
    padding: 40px;
    border-radius:30px;
    background: white;
    text-decoration:none;
    box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
    position: relative;
    margin: 50px 0 ;    
    animation: 1s ease-in-out ${slideUp},2s ease-in-out ${fadein};
`

const City = styled.div`
    font-size: 23px;
`
const Image = styled.div`
    width: 90px;
    height: 80px;
    margin-top: 40px;
    margin-bottom: 130px;
    margin-right:60px;
`

const CurrentWeather = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Temp = styled.div`
    font-size: 50px;
    margin-bottom: 10px;
`
const Main = styled.div`
    font-size: 15px;
`
const Temperature = styled.div`
    display: flex;
`
const TempDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`
const TempMin = styled.div`
    color: #02FF9B;
`

const TempMax = styled.div`
    color: #FF0000;
`
const TempM = styled.div`
    font-size: 25px;
    margin: 10px 0;
`

const WeatherCard = ({searchCity}) => {
    console.log(searchCity);
    const { city, weather, temp, temp_min, temp_max } = searchCity;
    return (
        <CardWrapper>
            <City>{city}</City>
            <Image>{MainWeather(weather)}</Image>
            <CurrentWeather>
                <Temp>{temp}°</Temp>
                <Main>{weather}</Main>
            </CurrentWeather>
            <Temperature>
                <TempDetail>
                    <TempMin>▼</TempMin>
                    <TempM>{temp_min}</TempM>
                    <TempMin>Min</TempMin>
                </TempDetail>
                <TempDetail>
                    <TempMax>▼</TempMax>
                    <TempM>{temp_max}</TempM>
                    <TempMax>Max</TempMax>
                </TempDetail>
            </Temperature>
        </CardWrapper>
    )
}

export default WeatherCard;