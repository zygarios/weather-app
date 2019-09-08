import React from 'react';
import './styles/Landscape.css';
import GrassItem from './weatherType/Items/GrassItem';
import DryItem from './weatherType/Items/DryItem';

import ClearSky from './weatherType/ClearSky.js';
import FewClouds from './weatherType/FewClouds.js';
import ScatteredClouds from './weatherType/ScatteredClouds.js';
import BrokenClouds from './weatherType/BrokenClouds.js';
import Rain from './weatherType/Rain.js';
import ShowerRain from './weatherType/ShowerRain.js';
import Thunderstorm from './weatherType/Thunderstorm.js';
import Snow from './weatherType/Snow.js';
import Nowhere from './weatherType/Nowhere.js';

function Landscape({ weatherType }) {
  // const weatherType = 'nowhere';
  console.log(weatherType);
  let showWeather;
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
    case 'nowhere':
      console.log(weatherType);
      showWeather = <Nowhere></Nowhere>;
      break;
    default: {
      showWeather = <ClearSky></ClearSky>;
      break;
    }
  }
  return (
    <div className="landscape">
      {weatherType !== 'nowhere' ? (
        <GrassItem></GrassItem>
      ) : (
        <DryItem></DryItem>
      )}
      {showWeather}
    </div>
  );
}
export default Landscape;
