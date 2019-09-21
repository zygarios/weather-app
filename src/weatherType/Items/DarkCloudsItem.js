import React from 'react';
import darkCloud from '../../img/dark-cloud.png';
import brightCloud from '../../img/bright-cloud.png';

function DarkCloudsItem({ weatherID, darkitem, id }) {
  let cloudType = darkCloud;
  let changePositionToTop = null;
  if (weatherID === '13' || weatherID === '04') {
    cloudType = brightCloud;
    changePositionToTop = { top: '-40%' };
  }
  return (
    <div className={`dark-clouds dark-clouds--${id}`}>
      <img
        className={`dark-clouds__cloud ${darkitem}`}
        src={cloudType}
        alt="dark-cloud"
        style={changePositionToTop}
      />
      <img
        className={`dark-clouds__cloud ${darkitem}`}
        src={cloudType}
        alt="dark-cloud"
        style={changePositionToTop}
      />
      <img
        className={`dark-clouds__cloud ${darkitem}`}
        src={cloudType}
        alt="dark-cloud"
        style={changePositionToTop}
      />
      <img
        className={`dark-clouds__cloud ${darkitem}`}
        src={cloudType}
        alt="dark-cloud"
        style={changePositionToTop}
      />
      <img
        className={`dark-clouds__cloud ${darkitem}`}
        src={cloudType}
        alt="dark-cloud"
        style={changePositionToTop}
      />
    </div>
  );
}

export default DarkCloudsItem;
