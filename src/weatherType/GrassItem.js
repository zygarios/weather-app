import React from 'react';
import grass from '../img/grass.png';

function GrassItem() {
  return (
    <>
      <div className="landscape__grassland" alt="grassland" />
      <img
        className="landscape__grass landscape__grass--close "
        src={grass}
        alt="grass"
      />
      <img
        className="landscape__grass landscape__grass--normal"
        src={grass}
        alt="grass"
      />
      <img
        className="landscape__grass landscape__grass--far"
        src={grass}
        alt="grass"
      />
      <img
        className="landscape__grass landscape__grass--very-far"
        src={grass}
        alt="grass"
      />
    </>
  );
}

export default GrassItem;
