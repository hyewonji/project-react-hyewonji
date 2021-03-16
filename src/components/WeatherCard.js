import React from 'react';
import styled from 'styled-components';
import MainWeather from './MainWeather';

const CardWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    width: 80%;
    height: 550px;
    padding: 40px;
    border-radius:30px;
    background: white;
    text-decoration:none;
    box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);
`

const City = styled.div`
    font-size: 23px;
`
const Image = styled.div`
    width: 70px;
    height: 70px;
    padding: 10px;
    margin: 20px;
`

const CurrentWeather = styled.div`
`

const Temp = styled.div``
const Main = styled.div``
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
const TempM = styled.div``

const WeatherCard = ({searchCity}) => {
    const { city, weather, temp, temp_min, temp_max } = searchCity;
    return (
        <CardWrapper>
            <City>{city}</City>
            <Image>{MainWeather(weather)}</Image>
            <CurrentWeather>
                <Temp>{temp}</Temp>
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
                    <TempMax>Min</TempMax>
                </TempDetail>
            </Temperature>
        </CardWrapper>
    )
}

export default WeatherCard;