import React from "react";
import styled from 'styled-components';
import HelmetComponent from "../components/HelmetComponent";
import HomeTemaplate from "../components/HomeTemplate";
import NavBar from "../components/NavBar";
import WeatherCard from '../components/WeatherCard';
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

const Home = () => {
  const weathers = useWeatherState();
  return (
    <>
      <HelmetComponent title="Home" />
      <NavBar></NavBar>
      <WeatherListBlock>
        {weathers.map(weather => (
          <WeatherCard
            searchCity = {weather}
          />
        ))}
        <HomeTemaplate></HomeTemaplate>
      </WeatherListBlock>
    </>
  );
};

export default Home;
