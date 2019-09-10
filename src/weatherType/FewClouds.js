import React from 'react';
import birds from '../img/birds.gif';
import BrightCloudsItem from './Items/BrightCloudsItem';

function FewClouds({ timeID }) {
  return (
    <div className="landscape__few-clouds">
      <img className="birds" src={birds} alt="birds" />
      <BrightCloudsItem timeID={timeID}></BrightCloudsItem>
    </div>
  );
}

export default FewClouds;
