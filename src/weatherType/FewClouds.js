import React from 'react';
import birds from '../img/birds.gif';
import BrightCloudsItem from './Items/BrightCloudsItem';
import GrassItem from '../weatherType/Items/GrassItem';

function FewClouds({ weatherID, timeID, darkitem }) {
  return (
    <div className="few-clouds">
      <img className="birds" src={birds} alt="birds" />
      <BrightCloudsItem darkitem={darkitem}></BrightCloudsItem>
      <img className="birds" src={birds} alt="birds" />

      <GrassItem weatherID={weatherID} timeID={timeID}></GrassItem>
    </div>
  );
}

export default FewClouds;
