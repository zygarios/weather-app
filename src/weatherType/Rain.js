import React from 'react';
import DarkCloudsItem from './Items/DarkCloudsItem.js';
import GrassItem from '../weatherType/Items/GrassItem.js';

function Rain({ weatherID, darkitem, timeID }) {
  return (
    <div className="rain">
      <DarkCloudsItem darkitem={darkitem}></DarkCloudsItem>
      <GrassItem weatherID={weatherID} timeID={timeID}></GrassItem>
    </div>
  );
}

export default Rain;
