import React, { useState, useEffect } from "react";
import { CallApi } from "../api";
import { CountryApi } from "../api";
import NavBar from "../components/NavBar";
import AddTemplate from "../components/AddTemplate";
import WeatherCard from "../components/WeatherCard";

const Add = () => {
  const [coords, setCoords] = useState({
    latitude: null,
    longitude: null,
  });
  const [cityWeather, setCityWeather] = useState({
    city: null,
    weather: null,
    temp: 0,
  });
  const [inputValue,setInputValue] = useState(null);
  const [cityList,setCityList] = useState([]);
  const COORDS = 'coords';
  const CITY = 'city';
  
  const getWeather = async (request) => {
    if(request === COORDS){
      if(coords.latitude !== null && coords.longitude !== null){
        const weatherDataByCoords = await CallApi(COORDS,coords);
        const { data : { 
          weather, 
          name : city,
          main : {
            temp} 
          }} = weatherDataByCoords;
        
        setCityWeather({
          ...cityWeather,
          city,
          weather: weather[0].main,
          temp
        })
      }
    } else if(request === CITY){
      console.log(CITY)
    }
    
  };
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(CITY);
  };

  const handleClick = (e) => {
    console.log(e);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoords({
        ...coords,
        latitude,
        longitude
      })
    });
  }, []);

  useEffect(() => {
    getWeather(COORDS);
  },[COORDS,coords]);

  useEffect(()=> {
    const data = CountryApi('get');
    data.then(res => {
      const { data } = res
      data.forEach(country => {
        if(country.capital.length){
          cityList.push(country.capital)
        }
      });
      cityList.sort();
    })
  },[]);
  
  return (
    <>
      <NavBar />
      <AddTemplate
        onSubmit={handleSubmit}
        onChange={handleChange}
        cityWeather={cityWeather}
        onClick={handleClick}
      ></AddTemplate>
    </>
  );
};

export default Add;
