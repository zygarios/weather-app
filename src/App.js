import React, { useState } from 'react';
import Landscape from './Landscape.js';
import Termometer from './Termometer.js';
import Form from './Form';
import './styles/App.css';
const axios = require('axios');

const APIKey = '2518179022e0b5718134df51206271e6';

function App() {
  const [cityWeather, setCityWeather] = useState({
    weatherID: null,
    timeID: null,
    temp: null
  });

  const getWeather = cityName => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${APIKey}`
      )
      .then(({ data }) => {
        const typeID = data.weather[0].icon;

        const weatherID = typeID.slice(0, 2);
        const timeID = typeID.slice(2, 3);
        const temp = data.main.temp;
        setCityWeather({
          weatherID,
          timeID,
          temp
        });
      })
      .catch(error => {
        const status = error.response.status;
        if (status === 404) {
          setCityWeather({
            weatherID: 'nowhere',
            timeID: null,
            temp: null
          });
        }
      });
  };
  const { weatherID, timeID, temp } = cityWeather;
  return (
    <div className="App">
      <Termometer temp={temp} />
      <Form getWeather={getWeather} />
      <Landscape weatherID={weatherID} timeID={timeID} />
    </div>
  );
}

export default App;
