import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import HelmetComponent from "../components/HelmetComponent";
import HomeTemaplate from "../components/HomeTemplate";
import NavBar from "../components/NavBar";
import WeatherCard from '../components/WeatherCard';
import weatherApi from '../components/WeatherApi';
import { useWeatherState } from '../WeatherContext';

const WeatherListBlock = styled.div`
  width: 100vw;
  margin: 100px 30px; 
  display: grid;
  grid-template-columns: repeat(3, 400px);
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 400px);
  }
  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(1, 400px);
  }
`

function Home(){
  const weathers = useWeatherState(); // weatherContex.js에서 id, cityName 저장돼있는 state불러옴
  const [weather,setWeather] = useState([]) // cityName으로 weather API로부터 불러온 정보 저장(cityName, weather, temperature, temperatureMin, temperatureMax )
  const test = []
  

  useEffect(()=>{
    weathers.map(item => (
      weatherApi(item.city)
      .then(res => {
        setWeather(weather => [...weather, res]);
        console.log(weather);
      })
    ))

      /*
      setWeather(
        [...weather,res]
        
      )) */// cityName으로 weather API로부터 날씨정보 불러옴
  },[])

  return (
    <>
      <HelmetComponent title="Home" />
      <NavBar></NavBar>
      <WeatherListBlock>
        {weather.map(item => (  // weather에 저장된 정보로 WeatherCard 호출(?)
            <WeatherCard
              searchCity = {item}
            />
          ))}
        <HomeTemaplate></HomeTemaplate>
      </WeatherListBlock> 
    </>
  );
};

export default Home;
