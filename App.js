import React from 'react';
// Import data and WeatherCard here
import WeatherCard from './components/WeatherCard';
import cities from './data';
import { useState } from 'react';
import Location from './components/Location';

const [location,setLocation] = useState('Liverpool')

function App() {
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */
                cities.map((cityData, index) => (
                    <WeatherCard key={index} 
                    data={cityData} />
                )
                )}
                


            </div>
            
        </>
    )
}

export default App;