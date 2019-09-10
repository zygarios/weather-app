import React from 'react';
import './styles/Landscape.css';
import GrassItem from './weatherType/Items/GrassItem';
import DryItem from './weatherType/Items/DryItem';

import WelcomeScreen from './weatherType/WelcomeScreen.js';
import ClearSky from './weatherType/ClearSky.js';
import FewClouds from './weatherType/FewClouds.js';
import ScatteredClouds from './weatherType/ScatteredClouds.js';
import BrokenClouds from './weatherType/BrokenClouds.js';
import Rain from './weatherType/Rain.js';
import ShowerRain from './weatherType/ShowerRain.js';
import Thunderstorm from './weatherType/Thunderstorm.js';
import Snow from './weatherType/Snow.js';
import Nowhere from './weatherType/Nowhere.js';

function Landscape({ weatherID, timeID }) {
  // function Landscape() {
  // const weatherType = 'few clouds';

  let showWeather;
  let layout;
  switch (weatherID) {
    case '01':
      showWeather = <ClearSky timeID={timeID}></ClearSky>;
      break;
    case '02':
      showWeather = <FewClouds timeID={timeID}></FewClouds>;
      break;
    case '03':
      showWeather = <ScatteredClouds timeID={timeID}></ScatteredClouds>;
      break;
    case '04':
      showWeather = <BrokenClouds timeID={timeID}></BrokenClouds>;
      break;
    case '10':
      showWeather = <Rain timeID={timeID}></Rain>;
      break;
    case '09':
      showWeather = <ShowerRain timeID={timeID}></ShowerRain>;
      break;
    case '11':
      showWeather = <Thunderstorm timeID={timeID}></Thunderstorm>;
      break;
    case '13':
      showWeather = <Snow timeID={timeID}></Snow>;
      break;
    case 'nowhere':
      showWeather = <Nowhere></Nowhere>;
      break;
    default: {
      break;
    }
  }

  if (weatherID === 'nowhere') {
    layout = <DryItem></DryItem>;
  } else if (weatherID === null) {
    // layout = <WelcomeScreen></WelcomeScreen>;
    layout = <GrassItem timeID={timeID}></GrassItem>;
  } else {
    layout = <GrassItem timeID={timeID}></GrassItem>;
  }

  return (
    <div className="landscape">
      {layout}
      {showWeather}
    </div>
  );
}

export default Landscape;
