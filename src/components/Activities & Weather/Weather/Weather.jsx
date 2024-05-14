import './Weather.css'
// import { useState, useEffect } from 'react'
import weather_logo from '../../../assets/logo/weather-1.png'

export default function Weather ({ weather }) {

    const weatherTemp = (api_temp) => {
        let regex = /(\d+)/;
        let match = api_temp.match(regex);
        if (match) {
            let temperature = match[1];
            return `${temperature}°`
        }
        return api_temp;
    }

    return (
        <>
            <div className='weather-font'>Weather</div>
            <div className='weather-section'>
                { weather.length > 0 ? (
                                    
                        weather.map((weatherItem, index) => (
                            <div className='dividing-section' key={index}>
                                <div className='left-side-content'>
                                    {weatherItem.day}
                                </div>
                                <div className='vertical-line'></div>
    
                                <div className='weather-logo'> <img src={weather_logo} alt='weather-logo' /> </div>
                                
                                <div className='right-side-content'>
                                    <div className='seperate-right-side-content'>
                                        <span>{weatherTemp(weatherItem.high)}</span>
                                        <span>{weatherItem.summary}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                                    
                ): (<div>No weather data available</div>) }

            </div>
        </>
    )
}