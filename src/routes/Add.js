import React, {Component} from 'react';
import axios from 'axios';
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
        const weather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`)
        this.setState({
            temperature: Math.floor(weather.data.main.temp - 273.15),
            tempMin: Math.floor(weather.data.main.temp_min - 273.15),
            tempMax: Math.floor(weather.data.main.temp_max - 273.15),
            main : weather.data.weather[0].main
            })
    }

    componentDidMount(){
        this.getMovies();
    }

    render(){
        console.log(this.state.main)
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