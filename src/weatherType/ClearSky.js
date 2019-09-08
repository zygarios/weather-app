import React from 'react';
import birds from '../img/birds.gif';
import SunItem from './SunItem';

function ClearSky() {
  return (
    <div className="landscape__clear-sky">
      <SunItem></SunItem>
      <img className="birds" src={birds} alt="birds" />
    </div>
  );
}

export default ClearSky;
