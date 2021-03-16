import React, { useState, useEffect } from "react";
import { CallApi } from "../api";
import { CountryApi } from "../api";
import NavBar from "../components/NavBar";
import AddTemplate from "../components/AddTemplate";

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
    temp_max:0
  })
  const [cityList,setCityList] = useState([]);
  const [inputValue,setInputValue] = useState(null);
  const [inputList,setinputList] = useState([]);
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
        
        setNowCity({
          ...nowCity,
          city,
          weather: weather[0].main,
          temp: Math.round(temp-273)
        })
      }
    } else if (request === CITY){
      const cityName = inputValue;
      const weatherDataByCity = await CallApi(CITY,cityName);
      const { data : {
        weather, 
        main : { 
          temp, 
          temp_min, 
          temp_max }}
      } = weatherDataByCity;
      setSearchCity({
        ...searchCity,
        city: cityName.toUpperCase(),
        weather: weather[0].main,
        temp : Math.round(temp-273),
        temp_min : Math.round(temp_min-273),
        temp_max : Math.round(temp_max-273)
      })
    } 
  };

  const getCityList = () => {
    const data = CountryApi();
    data.then(res => {
      const { data } = res
      data.forEach(country => {
        if(country.capital.length){
          cityList.push(country.capital)
        }
      });
      cityList.sort();
    })
  } 
  
  const getInputList = () => {
    setinputList([]);
    if(inputValue){
      cityList.forEach(city => {
        const cityS = city.replace(" ","").toLowerCase();
        if(cityS.includes(inputValue) && inputList.length < 5){
          inputList.push(city);
        }
      })
    }
    console.log(inputList);
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const capitalize = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    if(cityList.indexOf(capitalize) >= 0){
      getWeather(CITY);
    }
  };

  const handleClick = (e) => {
    console.log(e);
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

  useEffect(()=> {
    getInputList();
  },[inputValue]);
  

  return (
    <>
      <NavBar />
      <AddTemplate
        onClick={handleClick}
        onChange={handleChange}
        onSubmit={handleSubmit}
        inputList={inputList}
        nowCity={nowCity}
        searchCity={searchCity}
        inputValue={inputValue}
      ></AddTemplate>
    </>
  );
};

export default Add;
