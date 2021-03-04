import React, {Component} from 'react';
import weatherApi from '../api';
import AddCurrent from '../components/AddCurrent';
import WeatherCard from '../weather-card/WeatherCard';

const API_KEY = 'ed3b96c06f6343ed844ef371d65d6a1b'
const CITY_NAME = 'Masan'

class Add extends Component {

    state={
            temperature: 0,
            tempMin: 0,
            tempMax: 0,
            main: '',
            name : CITY_NAME
    };

    getMovies = async () => {
        console.log(weatherApi)
        const weatherData = await weatherApi;
        
        this.setState({
            temperature: Math.floor(weatherData.data.main.temp - 273.15),
            tempMin: Math.floor(weatherData.data.main.temp_min - 273.15),
            tempMax: Math.floor(weatherData.data.main.temp_max - 273.15),
            main : weatherData.data.weather[0].main
        })
    }

    componentDidMount(){
        this.getMovies();
    }

    handleSubmit = (e) => {
        console.log(e.value)
    }

    render(){
        const currentWeather = {
            temperature : this.state.temperature,
            tempMin : this.state.tempMin,
            tempMax : this.state.tempMax,
            main : this.state.main,
            name : this.state.name
        };

        return(
            <AddCurrent currentWeather = { currentWeather } weatherCard = { WeatherCard }> 
            </AddCurrent>   
        )
    }
};

export default Add; 