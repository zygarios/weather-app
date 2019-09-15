import React from 'react';
import darkCloud from '../../img/dark-cloud.png';

function DarkCloudsItem({ darkitem, id }) {
  return (
    <div className={`dark-clouds dark-clouds--${id}`}>
      <img
        className={`dark-clouds__cloud ${darkitem}`}
        src={darkCloud}
        alt="dark-cloud"
      />
      <img
        className={`dark-clouds__cloud ${darkitem}`}
        src={darkCloud}
        alt="dark-cloud"
      />
      <img
        className={`dark-clouds__cloud ${darkitem}`}
        src={darkCloud}
        alt="dark-cloud"
      />
      <img
        className={`dark-clouds__cloud ${darkitem}`}
        src={darkCloud}
        alt="dark-cloud"
      />
      <img
        className={`dark-clouds__cloud ${darkitem}`}
        src={darkCloud}
        alt="dark-cloud"
      />
    </div>
  );
}

export default DarkCloudsItem;
