import React from 'react';
import DarkCloudsItem from './Items/DarkCloudsItem.js';
import GrassItem from '../weatherType/Items/GrassItem.js';

function Snow({ weatherID, darkitem, timeID }) {
  return (
    <div className="snow">
      <DarkCloudsItem
        darkitem={darkitem}
        weatherID={weatherID}
      ></DarkCloudsItem>
      <GrassItem weatherID={weatherID} timeID={timeID}></GrassItem>
    </div>
  );
}

export default Snow;
