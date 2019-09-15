import React from 'react';
import birds from '../img/birds.gif';
import BrightCloudsItem from './Items/BrightCloudsItem';
import GrassItem from '../weatherType/Items/GrassItem';

function ScatteredClouds({ weatherID, darkitem, timeID }) {
  return (
    <div className="scattered-clouds">
      <img className="birds" src={birds} alt="birds" />
      <BrightCloudsItem id="one" darkitem={darkitem}></BrightCloudsItem>
      <BrightCloudsItem id="two" darkitem={darkitem}></BrightCloudsItem>
      <img className="birds" src={birds} alt="birds" />
      <GrassItem weatherID={weatherID} timeID={timeID}></GrassItem>
    </div>
  );
}

export default ScatteredClouds;
