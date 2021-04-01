import axios from "axios";

import API_KEY from './components/ApiKey';

export const WeatherApi = (request,params) => {
  const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    params: (request === 'coords' 
      ? {
        lat: params.latitude,
        lon: params.longitude,
        appid: API_KEY,
      } : {
        q: params,
        appid: API_KEY
      })
  });
  const weatherApi = api.get("weather");

  return weatherApi;
};

export const CountryApi = () => {
  const api = axios.create({
    baseURL: "https://restcountries.eu/rest/v2/all"
  })
  const countryApi = api.get();
  return countryApi;
};

export async function postLogin({ email, password }) {
  const url = "http://localhost:4000/login";
  const response = await axios.post(url, {
    data: {
      email,
      password,
    },
  });
  const { data } = response;
  return data;
}