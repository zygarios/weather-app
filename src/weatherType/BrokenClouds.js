import React from 'react';
import DarkCloudsItem from './Items/DarkCloudsItem.js';
import GrassItem from '../weatherType/Items/GrassItem.js';

function BrokenClouds({ weatherID, darkitem, timeID }) {
  return (
    <div className="broken-clouds">
      <DarkCloudsItem darkitem={darkitem}></DarkCloudsItem>
      <GrassItem weatherID={weatherID} timeID={timeID}></GrassItem>
    </div>
  );
}

export default BrokenClouds;
