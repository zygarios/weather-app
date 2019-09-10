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

  let darkClass = null;
  if (timeID === 'n') {
    darkClass = 'dark-grass';
  }
  return (
    <>
      {timeID === 'd' || timeID === null ? (
        <SunItem></SunItem>
      ) : (
        <MoonItem></MoonItem>
      )}
      {timeID === 'n' && (
        <>
          <img src={stars} alt="stars" className="landscape__stars" />
        </>
      )}
      <div className="grass">
        <div className={`landscape__grassland ${darkClass + '-1'}`} />
        <img
          className={`landscape__grass landscape__grass--close ${darkClass +
            '-2'}`}
          src={grass}
          alt="grass"
        />
        <img
          className={`landscape__grass landscape__grass--normal ${darkClass +
            '-3'}`}
          src={grass}
          alt="grass"
        />
        <img
          className={`landscape__grass landscape__grass--far ${darkClass +
            '-4'}`}
          src={grass}
          alt="grass"
        />
        <img
          className={`landscape__grass landscape__grass--very-far ${darkClass +
            '-5'}`}
          src={grass}
          alt="grass"
        />
      </div>
    </>
  );
}

export default GrassItem;
