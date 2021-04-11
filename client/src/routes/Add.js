import React, { useState, useEffect } from "react";

import { WeatherApi } from "../api";

import { CountryApi } from "../api";

import HelmetComponent from "../components/HelmetComponent";

import weatherData from '../components/WeatherData';

import AddTemplate from "../components/AddTemplate";

import { useAppState, useAppDispatch } from '../WeatherContext';


const Add = () => {
  const [coords, setCoords] = useState({
    latitude: null,
    longitude: null,
  });
  const [nowCity, setNowCity] = useState({
    city: null,
    weather: null,
    temp: 0,
  });
  const [searchCity, setSearchCity] = useState({
    city: null,
    weather: null,
    temp: 0,
    temp_min: 0,
    temp_max: 0
  })
  const [cityList, setCityList] = useState(null);
  let cities = [];
  const [inputValue,setInputValue] = useState(null);
  //const [inputList,setInputList] = useState([]);
  
  const [showWeatherCard, setShowWeatherCard] = useState(false);
  const [addMode, setAddMode] = useState(null);
  const COORDS = 'coords';
  const CITY = 'city';
  const dispatch = useAppDispatch();
  
  const getWeather = async (request) => {
    if(request === COORDS){
      if(coords.latitude !== null && coords.longitude !== null){
        const weatherDataByCoords = await WeatherApi(COORDS,coords);
        const { data : { 
          weather, 
          name : city,
          main : {
            temp} 
          }} = weatherDataByCoords;
        
        setNowCity({
          ...nowCity,
          city,
          weather: weather[0].main,
          temp: Math.round(temp-273)
        })
      }
    } else if (request === CITY){
      weatherData(inputValue)
      .then(weatherInfo=> setSearchCity(weatherInfo))
    } 
  };
  
  const getCityList = () => {
    const data = CountryApi();
    data.then(res => {
      const { data } = res
      data.forEach(country => {
        if(country.capital.length){
          cities.push(country.capital);
        }
      });
    }).then(res => {
        setCityList(cities.sort());
      })

  } 
  
  /*
  const getInputList = () => {
    if(inputValue){
      setInputList([]);
      cityList.forEach(city => {
        const cityS = city.replace(" ","").toLowerCase();
        if(cityS.includes(inputValue) && inputList.length < 5){
          inputList.push(city);
        }
      })
    }
    console.log(inputList);
  }
  */

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const capitalize = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    if(cityList.indexOf(capitalize) >= 0){
      getWeather(CITY);
    } else {
      setShowWeatherCard(false);
    }
  };

  const state = useAppState();
  const handleClick = () => {
    const login = state.login.email;
    if(login){
      dispatch({
        type: 'ADD_CITY',
        city: searchCity.city
      })
      setAddMode('Fail');
      setAddMode('Success');
    } else {
      setAddMode('Fail');
    } 
    setShowWeatherCard(false);
    setTimeout(()=> setAddMode(null),2000);
  }

  useEffect(() => {
    getCityList();
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

  /*  
  useEffect(()=> {
    getInputList();
  },[inputValue, inputList]);
  */

  useEffect(()=>{
    if(searchCity.city !== null){
      setShowWeatherCard(false);
      setShowWeatherCard(true);
    } else {
      setShowWeatherCard(false);
    }
  },[searchCity]);

  return (
    <>
      <HelmetComponent title="Add" />
      <AddTemplate
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClick={handleClick}
        nowCity={nowCity}
        searchCity={searchCity}
        showWeatherCard={showWeatherCard}
        addMode={addMode}
      ></AddTemplate>
    </>
  );
};

export default React.memo(Add);
