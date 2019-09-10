import React from 'react';

import sun from '../../img/sun.png';

function SunItem() {
  return (
    <div className="sun-item">
      <img className="sun-item__sun" src={sun} alt="sun" />
      <div className="sun-item__glow"></div>
    </div>
  );
}

export default SunItem;
