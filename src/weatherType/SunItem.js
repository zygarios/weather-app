import React from 'react';

import Sun from '../img/sun.png';

function SunItem() {
  return (
    <>
      <img className="sun" src={Sun} alt="sun" />
      <div className="sun__glow"></div>
    </>
  );
}

export default SunItem;
