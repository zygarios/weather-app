import React from 'react';
import birds from '../img/birds.gif';
import BrightCloudsItem from './Items/BrightCloudsItem';

function FewClouds() {
  return (
    <div className="landscape__few-clouds">
      <img className="birds" src={birds} alt="birds" />
      <BrightCloudsItem></BrightCloudsItem>
    </div>
  );
}

export default FewClouds;
