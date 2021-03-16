import axios from "axios";

const API_KEY = "ed3b96c06f6343ed844ef371d65d6a1b";

export const CallApi = (request,params) => {
  const api = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/",
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
