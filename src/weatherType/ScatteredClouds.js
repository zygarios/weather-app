import React from 'react';
import birds from '../img/birds.gif';
import BrightCloudsItem from '../weatherType/Items/BrightCloudsItem';
import Filter from '../Filter.js';

function ScatteredClouds({ timeID }) {
  return (
    <div className="landscape__scattered-clouds">
      <Filter darkness="1"></Filter>
      <img className="birds" src={birds} alt="birds" />
      <BrightCloudsItem timeID={timeID}></BrightCloudsItem>
      <BrightCloudsItem timeID={timeID}></BrightCloudsItem>
    </div>
  );
}

export default ScatteredClouds;
