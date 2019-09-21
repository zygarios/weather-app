import React from 'react';
import grassNormal from '../../img/grass.png';
import stars from '../../img/stars.png';
import SunItem from './SunItem.js';
import MoonItem from './MoonItem.js';
import RainItem from './RainItem.js';
import SnowItem from './SnowItem.js';
import grassSnow from '../../img/grass_snow.png';
import grasslandSnow from '../../img/grassland-snow.png';
import grasslandNormal from '../../img/grassland.png';

function GrassItem({ weatherID, timeID }) {
  let darkClass = null;
  let littleDark = null;
  if (timeID === 'n') {
    darkClass = 'dark-grass';
  }
  let fastClass = null;
  if (weatherID === '13' || weatherID === '04') {
    littleDark = { filter: 'brightness(.7)' };
  } else if (weatherID * 1 >= 5) {
    fastClass = 'fast';
    littleDark = { filter: 'brightness(.4)' };
  }
  let sunMoon = null;

  if ((timeID === 'd' && weatherID * 1 < 4) || timeID === null) {
    sunMoon = <SunItem></SunItem>;
  } else if (timeID === 'n') {
    sunMoon = <MoonItem></MoonItem>;
  }

  let rainOrSnow = null;
  let grass = grassNormal;

  let grassland = {
    background: `url(${grasslandNormal}) bottom/cover`
  };

  if (weatherID === '10' || weatherID === '09' || weatherID === '11') {
    rainOrSnow = <RainItem timeID={timeID}></RainItem>;
  } else if (weatherID === '13') {
    grass = grassSnow;
    grassland = {
      background: `url(${grasslandSnow}) top/cover`,
      filter: 'brightness(1.2)'
    };

    rainOrSnow = <SnowItem timeID={timeID}></SnowItem>;
  }

  return (
    <>
      <div className="grass" style={littleDark}>
        <div
          className={`grass__grassland ${darkClass + '-1'}`}
          style={grassland}
        />
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
        {rainOrSnow}
      </div>
      {sunMoon}

      {timeID === 'n' && (
        <>
          <img src={stars} alt="stars" className="stars" />
        </>
      )}
    </>
  );
}

export default GrassItem;
