import React from 'react';
import './styles/Landscape.css';

import ClearSky from './weatherType/ClearSky.js';
import FewClouds from './weatherType/FewClouds.js';
import ScatteredClouds from './weatherType/ScatteredClouds.js';
import BrokenClouds from './weatherType/BrokenClouds.js';
import Rain from './weatherType/Rain.js';
import HeavyRain from './weatherType/HeavyRain.js';
import Thunderstorm from './weatherType/Thunderstorm.js';
import Snow from './weatherType/Snow.js';
import Mist from './weatherType/Mist.js';
import Nowhere from './weatherType/Nowhere.js';

function Landscape({ weatherID, timeID }) {
  let darkitem = null;
  if (timeID === 'n') {
    darkitem = 'darkitem';
  }

  let showWeather;

  switch (weatherID) {
    case '01':
      showWeather = <ClearSky timeID={timeID} weatherID={weatherID}></ClearSky>;
      break;
    case '02':
      showWeather = (
        <FewClouds
          timeID={timeID}
          darkitem={darkitem}
          weatherID={weatherID}
        ></FewClouds>
      );
      break;
    case '03':
      showWeather = (
        <ScatteredClouds
          timeID={timeID}
          darkitem={darkitem}
          weatherID={weatherID}
        ></ScatteredClouds>
      );
      break;
    case '04':
      showWeather = (
        <BrokenClouds
          timeID={timeID}
          darkitem={darkitem}
          weatherID={weatherID}
        ></BrokenClouds>
      );
      break;
    case '10':
      showWeather = (
        <Rain timeID={timeID} darkitem={darkitem} weatherID={weatherID}></Rain>
      );
      break;
    case '09':
      showWeather = (
        <HeavyRain
          timeID={timeID}
          darkitem={darkitem}
          weatherID={weatherID}
        ></HeavyRain>
      );
      break;
    case '11':
      showWeather = (
        <Thunderstorm
          timeID={timeID}
          darkitem={darkitem}
          weatherID={weatherID}
        ></Thunderstorm>
      );
      break;
    case '13':
      showWeather = (
        <Snow weatherID={weatherID} timeID={timeID} darkitem={darkitem}></Snow>
      );
      break;
    case '50':
      showWeather = (
        <Mist weatherID={weatherID} timeID={timeID} darkitem={darkitem}></Mist>
      );
      break;
    case 'nowhere':
      showWeather = <Nowhere></Nowhere>;
      break;

    default: {
      break;
    }
  }

  return <div className="landscape">{showWeather}</div>;
}

export default Landscape;
