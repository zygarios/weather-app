import React from 'react';
import grass from '../../img/grass.png';
import stars from '../../img/stars.png';
import SunItem from './SunItem.js';
import MoonItem from './MoonItem.js';
import RainItem from './RainItem';

function GrassItem({ weatherID, timeID }) {
  let darkClass = null;
  let littleDark = null;
  if (timeID === 'n') {
    darkClass = 'dark-grass';
  }
  let fastClass = null;
  if (weatherID * 1 >= 4) {
    fastClass = 'fast';
    littleDark = { filter: 'brightness(.4)' };
  }
  let sunMoon = null;

  if ((timeID === 'd' && weatherID * 1 < 4) || timeID === null) {
    sunMoon = <SunItem></SunItem>;
  } else if (timeID === 'n') {
    sunMoon = <MoonItem></MoonItem>;
  }

  let rain = null;
  if (weatherID === '10' || weatherID === '09' || weatherID === '11') {
    rain = <RainItem timeID={timeID}></RainItem>;
  }
  return (
    <>
      <div className="grass" style={littleDark}>
        <div className={`grass__grassland ${darkClass + '-1'}`} />
        <img
          className={`grass__item grass__item--close ${darkClass +
            '-2'} ${fastClass}`}
          src={grass}
          alt="grass"
        />
        <img
          className={`grass__item grass__item--normal ${darkClass +
            '-3'} ${fastClass}`}
          src={grass}
          alt="grass"
        />
        <img
          className={`grass__item grass__item--far ${darkClass +
            '-4'} ${fastClass}`}
          src={grass}
          alt="grass"
        />
        <img
          className={`grass__item grass__item--very-far ${darkClass +
            '-5'} ${fastClass}`}
          src={grass}
          alt="grass"
        />
        {rain}
      </div>
      {sunMoon}

      {timeID === 'n' && (
        <>
          <img src={stars} alt="stars" className="landscape__stars" />
        </>
      )}
    </>
  );
}

export default GrassItem;
