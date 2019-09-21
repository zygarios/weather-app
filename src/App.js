import React, { useState } from 'react';
import Landscape from './Landscape.js';
import Termometer from './Termometer.js';
import Form from './Form';
import WelcomeScreen from './WelcomeScreen.js';
import './styles/App.css';
import useBackgroundChanger from './Hooks.js';
const axios = require('axios');

const APIKey = '2518179022e0b5718134df51206271e6';

function App() {
  const [cityWeather, setCityWeather] = useState({
    // weatherID: '01',
    // timeID: 'n',
    weatherID: null,
    timeID: 'welcome',
    temp: null,
    result: 'Check weather forecast!'
  });
  const { weatherID, timeID, temp, result } = cityWeather;

  const getWeather = cityName => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${APIKey}`
      )
      .then(({ data }) => {
        const typeID = data.weather[0].icon;

        const weatherID = typeID.slice(0, 2);
        const timeID = typeID.slice(2, 3);
        const temp = data.main.temp;
        setCityWeather({
          weatherID,
          timeID,
          temp,
          result: cityName
        });
      })
      .catch(error => {
        console.log(error);
        const status = error.response.status;
        if (status === 404) {
          setCityWeather({
            weatherID: 'nowhere',
            timeID: null,
            temp: null,
            result: 'Not found'
          });
        }
      });
  };
  useBackgroundChanger(timeID, weatherID);
  return (
    <div className="App">
      <h1 className="App__result">{result}</h1>
      {timeID === 'welcome' ? (
        <WelcomeScreen></WelcomeScreen>
      ) : (
        <>
          <Landscape weatherID={weatherID} timeID={timeID} />
          <Termometer temp={temp} />
        </>
      )}
      <Form getWeather={getWeather} />
    </div>
  );
}

export default App;
