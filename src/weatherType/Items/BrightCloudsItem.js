import React from 'react';
import brightCloud from '../../img/bright-cloud.png';

function BrightCloudsItem({ darkitem, id }) {
  return (
    <div className={`bright-clouds bright-clouds--${id}`}>
      <img
        className={`bright-clouds__cloud ${darkitem}`}
        src={brightCloud}
        alt="bright cloud"
      />
      <img
        className={`bright-clouds__cloud ${darkitem}`}
        src={brightCloud}
        alt="bright cloud"
      />
      <img
        className={`bright-clouds__cloud ${darkitem}`}
        src={brightCloud}
        alt="bright cloud"
      />
      <img
        className={`bright-clouds__cloud ${darkitem}`}
        src={brightCloud}
        alt="bright cloud"
      />
      <img
        className={`bright-clouds__cloud ${darkitem}`}
        src={brightCloud}
        alt="bright cloud"
      />
    </div>
  );
}

export default BrightCloudsItem;
