import React from 'react';
import DarkCloudsItem from './Items/DarkCloudsItem.js';
import GrassItem from '../weatherType/Items/GrassItem.js';

function HeavyRain({ weatherID, darkitem, timeID }) {
  return (
    <div className="heavy-rain">
      <DarkCloudsItem darkitem={darkitem}></DarkCloudsItem>
      <GrassItem weatherID={weatherID} timeID={timeID}></GrassItem>
    </div>
  );
}

export default HeavyRain;
