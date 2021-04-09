import { WeatherApi } from "../api";

async function weatherApi( cityName ){
    const weatherDataByCity = await WeatherApi('city',cityName);
    const { data : {
    weather, 
    main : { 
        temp, 
        temp_min, 
        temp_max }}
    } = weatherDataByCity;
    
    const searchCity = {
        city: cityName.toUpperCase(),
        weather: weather[0].main,
        temp : Math.round(temp-273),
        temp_min : Math.round(temp_min-273),
        temp_max : Math.round(temp_max-273)
    }
    return searchCity;
};

export default weatherApi;