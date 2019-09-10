import React from 'react';

import sun from '../../img/sun.png';

function SunItem() {
  return (
    <>
      <img className="sun" src={sun} alt="sun" />
      <div className="sun__glow"></div>
    </>
  );
}

export default SunItem;
