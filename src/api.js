import axios from 'axios';

const API_KEY = 'ed3b96c06f6343ed844ef371d65d6a1b'
const CITY_NAME = 'Masan'

const api = axios.create({
    baseURL : 'http://api.openweathermap.org/data/2.5/',
    params : {
        q : CITY_NAME,
        appid : API_KEY
    }
})

const weatherApi = api.get('weather')

export default weatherApi