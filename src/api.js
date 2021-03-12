import axios from "axios";

const API_KEY = "ed3b96c06f6343ed844ef371d65d6a1b";

const CallApi = (request,params) => {
  const api = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/",
    params: (request === 'coords' 
      ? {
        lat: params.lat,
        lon: params.lon,
        appid: API_KEY,
      } : {
        city: params.city
      })
  });

  const weatherApi = api.get("weather");

  return weatherApi;
};

export default CallApi;
