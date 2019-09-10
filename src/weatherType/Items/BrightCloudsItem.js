import React from 'react';
import brightCloud from '../../img/bright-cloud.png';

function BrightCloudsItem({ timeID }) {
  let dayTime;
  if (timeID === 'n') dayTime = 'darkitem';
  else dayTime = 'bright-item';
  return (
    <div className="bright-clouds">
      <img
        className={`bright-cloud ${dayTime}`}
        src={brightCloud}
        alt="birds"
      />
      <img
        className={`bright-cloud ${dayTime}`}
        src={brightCloud}
        alt="birds"
      />
      <img
        className={`bright-cloud ${dayTime}`}
        src={brightCloud}
        alt="birds"
      />
      <img
        className={`bright-cloud ${dayTime}`}
        src={brightCloud}
        alt="birds"
      />
      <img
        className={`bright-cloud ${dayTime}`}
        src={brightCloud}
        alt="birds"
      />
    </div>
  );
}

export default BrightCloudsItem;
