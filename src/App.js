import React, { useState } from 'react';
import Landscape from './Landscape.js';
import Termometer from './Termometer.js';
import Form from './Form';
import './styles/App.css';
const axios = require('axios');

const APIKey = '2518179022e0b5718134df51206271e6';

function App() {
  const [cityWeather, setCityWeather] = useState({
    weatherType: 'welcome',
    temp: null
  });

  const getWeather = cityName => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${APIKey}`
      )
      .then(({ data }) => {
        const weatherType = data.weather[0].description;
        const temp = data.main.temp;
        setCityWeather({
          weatherType,
          temp
        });
      })
      .catch(error => {
        const status = error.response.status;
        if (status === 404) {
          setCityWeather({
            weatherType: 'nowhere',
            temp: null
          });
        }
      });
  };
  const { weatherType, temp } = cityWeather;
  return (
    <div className="App">
      <Termometer temp={temp} />
      <Form getWeather={getWeather} />
      <Landscape weatherType={weatherType} />
    </div>
  );
}

export default App;
