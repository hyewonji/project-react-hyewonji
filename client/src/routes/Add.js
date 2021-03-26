import React, { useState, useEffect } from "react";
import { CallApi } from "../api";
import { CountryApi } from "../api";
import weatherApi from '../components/WeatherApi';
import NavBar from "../components/NavBar";
import AddTemplate from "../components/AddTemplate";
import { useWeatherDispatch, useWeatherNextId } from '../WeatherContext';

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
  const [cityList,setCityList] = useState([]);
  const [inputValue,setInputValue] = useState(null);
  //const [inputList,setInputList] = useState([]);
  const [showWeatherCard, setShowWeatherCard] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const COORDS = 'coords';
  const CITY = 'city';
  
  const dispatch = useWeatherDispatch();
  const nextId = useWeatherNextId();
  
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
        
        setNowCity({
          ...nowCity,
          city,
          weather: weather[0].main,
          temp: Math.round(temp-273)
        })
      }
    } else if (request === CITY){
      weatherApi(inputValue)
      .then(weatherInfo=> setSearchCity(weatherInfo))
    } 
  };
  
  const getCityList = () => {
    const data = CountryApi();
    data.then(res => {
      const { data } = res
      data.forEach(country => {
        if(country.capital.length){
          cityList.push(country.capital);
        }
      });
    })
    cityList.sort();
    console.log(cityList);
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

  const handleClick = () => {
    dispatch({
      type: 'CREATE',
      search: {
        id: nextId.current,
        city: searchCity.city
      }
    })
    setShowWeatherCard(false);
    setAddMode(true);
    setTimeout(setAddMode(false),2000);
    nextId.current += 1;
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
      setShowWeatherCard(true);
    } else {
      setShowWeatherCard(false);
    }
  },[searchCity]);

  return (
    <>
      <NavBar />
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
