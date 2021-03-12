import React, { useState, useEffect } from "react";
import weatherApi from "../api";
import NavBar from "../components/NavBar";
import AddTemplate from "../components/AddTemplate";
import WeatherCard from "../components/WeatherCard";

const Add = () => {

  const [currentCoords, setCurrentCoords] = useState({
    lat: null,
    lon: null,
  });
  const [cityWeather, setCityWeather] = useState({
    city: null,
    main: null,
    temp: 0,
  });
  const [inputValue,setInputValue] = useState(null);


  const getWeather = async () => {
    if(currentCoords.lat !== null && currentCoords.lon !== null){
      console.log('how')
      const weatherData = await weatherApi('coords',currentCoords);
      console.log(weatherData);
      
      const { data : { name }} = weatherData;
      const { data : { weather }} = weatherData;
      const { data : { 
                main : { 
                  temp 
      }}} = weatherData;
      const main = weather[0].main
      setCityWeather({
        ...cityWeather,
        city : name,
        main,
        temp
      })
    }
  };
  
  const geoLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      
      if(lat !== currentCoords.lat && lon !== currentCoords.lon){
        setCurrentCoords({
          lat,
          lon
        })
      }
    })
  }

  useEffect(() => {
    geoLocation();
    getWeather();
  },[currentCoords])

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleSubmit = () => {
    console.log(inputValue);
  }
  
  return (
    <>
      <NavBar />
      <AddTemplate
        cityWeather={cityWeather}
        weatherCard={WeatherCard(cityWeather.main)}
        onSubmit={handleSubmit}
        onChange={handleChange}
      ></AddTemplate>
    </>
  );
};

export default Add;
