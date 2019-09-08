import React from 'react';
import './styles/Landscape.css';

import ClearSky from './weatherType/ClearSky.js';
import FewClouds from './weatherType/FewClouds.js';
import ScatteredClouds from './weatherType/ScatteredClouds.js';
import BrokenClouds from './weatherType/BrokenClouds.js';
import Rain from './weatherType/Rain.js';
import ShowerRain from './weatherType/ShowerRain.js';
import Thunderstorm from './weatherType/Thunderstorm.js';
import Snow from './weatherType/Snow.js';
import Mist from './weatherType/Mist.js';

function Landscape(props) {
  let showWeather;
  const weatherType = 'clear sky';
  // switch (props.weatherType) {
  switch (weatherType) {
    case 'clear sky':
      showWeather = <ClearSky></ClearSky>;
      break;
    case 'few clouds':
      showWeather = <FewClouds></FewClouds>;
      break;
    case 'scattered clouds':
      showWeather = <ScatteredClouds></ScatteredClouds>;
      break;
    case 'broken clouds':
      showWeather = <BrokenClouds></BrokenClouds>;
      break;
    case 'rain':
      showWeather = <Rain></Rain>;
      break;
    case 'shower rain':
      showWeather = <ShowerRain></ShowerRain>;
      break;
    case 'thunderstorm':
      showWeather = <Thunderstorm></Thunderstorm>;
      break;
    case 'snow':
      showWeather = <Snow></Snow>;
      break;
    case 'mist':
      showWeather = <Mist></Mist>;
      break;
    default: {
      showWeather = <ClearSky></ClearSky>;
      break;
    }
  }
  return (
    <div className="landscape">
      <div className="landscape__grass" alt="grass" />
      {showWeather}
    </div>
  );
}
export default Landscape;
