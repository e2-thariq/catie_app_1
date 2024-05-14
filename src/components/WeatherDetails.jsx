import { useState, useEffect } from "react"
import Weather from "./Activities & Weather/Weather/Weather";
import { api_urls } from '../../../api/api_urls.js'

export default function WeatherDetails () {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {
            try{
                const responseWeather = await fetch(api_urls.weatherApi);
                const weatherData = await responseWeather.json();
                console.log(`weather datas : ${weatherData}`)
                setWeather(weatherData.data.foreCastBeans)

            } catch (error) {
                console.error('Error fetching weather data', error)
            }

        }

        fetchWeather();

    }, [])

    return (
        <>
            <Weather weather={weather}/>
        </>
    )
}