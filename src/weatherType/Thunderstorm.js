import React from 'react';
import DarkCloudsItem from './Items/DarkCloudsItem.js';
import GrassItem from '../weatherType/Items/GrassItem';
import lightning from '../img/lighting.png';
function Thunderstorm({ weatherID, darkitem, timeID }) {
  return (
    <div className="thunderstorm">
      <DarkCloudsItem darkitem={darkitem}></DarkCloudsItem>
      <GrassItem weatherID={weatherID} timeID={timeID}></GrassItem>
      <img className="thunderstorm__lighting" src={lightning} alt="lighting" />
    </div>
  );
}

export default Thunderstorm;
