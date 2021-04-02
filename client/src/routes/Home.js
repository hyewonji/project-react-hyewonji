import React, { useEffect, useState } from "react";

import styled from 'styled-components';

import HelmetComponent from "../components/HelmetComponent";

import HomeTemaplate from "../components/HomeTemplate";

import NavBar from "../components/NavBar";

import WeatherCard from '../components/WeatherCard';

import WeatherData from '../components/WeatherData';

import { useAppState } from '../WeatherContext';


const WeatherListBlock = styled.div`
  width: 100vw;
  margin: 100px 30px; 
  display: grid;
  grid-template-columns: repeat(3, 370px);
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 370px);
  }
  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(1, 370px);
  }
`

function Home(){
  const state = useAppState(); // weatherContex.js에서 id, cityName 저장돼있는 state불러옴
  const [citys,setCitys]=useState([]);
  const [weather,setWeather] = useState([]); // cityName으로 weather API로부터 불러온 정보 저장(cityName, weather, temperature, temperatureMin, temperatureMax )
  const test = []
  

  useEffect(()=>{
    state.some(user => {
      if(user.login){
        setCitys(user.city);
        return true;
      };
    });
  },[]);

  useEffect(() => {
    citys.map(city => {
      WeatherData(city)
      .then(res => {
        setWeather(weather => [...weather, res]);
      })
    })
  }, [citys])

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
