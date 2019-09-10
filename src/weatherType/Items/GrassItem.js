import React, { useEffect } from 'react';
import grass from '../../img/grass.png';
import stars from '../../img/stars.png';
import SunItem from './SunItem.js';
import MoonItem from './MoonItem.js';

function GrassItem({ timeID }) {
  useEffect(() => {
    if (timeID === 'd') {
      document.body.style =
        'background: linear-gradient(rgb(0, 68, 255), rgb(0, 195, 255));';
    } else if (timeID === 'n') {
      document.body.style = `background: linear-gradient(rgb(0, 0, 0), rgb(56, 56, 56));`;
    }
  });

  return (
    <>
      {timeID === 'd' ? <SunItem></SunItem> : <MoonItem></MoonItem>}
      {timeID === 'n' && (
        <img src={stars} alt="stars" className="landscape__stars" />
      )}
      <div className="landscape__grassland" />
      <img
        className="landscape__grass landscape__grass--close "
        src={grass}
        alt="grass"
      />
      <img
        className="landscape__grass landscape__grass--normal"
        src={grass}
        alt="grass"
      />
      <img
        className="landscape__grass landscape__grass--far"
        src={grass}
        alt="grass"
      />
      <img
        className="landscape__grass landscape__grass--very-far"
        src={grass}
        alt="grass"
      />
    </>
  );
}

export default GrassItem;
