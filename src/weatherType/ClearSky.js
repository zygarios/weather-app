import React from 'react';
import birds from '../img/birds.gif';

function ClearSky() {
  return (
    <div className="landscape__clear-sky">
      <img className="birds" src={birds} alt="birds" />
    </div>
  );
}

export default ClearSky;
