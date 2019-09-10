import React from 'react';

import moon from '../../img/moon.png';

function MoonItem() {
  return (
    <>
      <img className="moon moon--glow" src={moon} alt="moon-glow"></img>
      <img className="moon" src={moon} alt="moon" />
    </>
  );
}

export default MoonItem;
