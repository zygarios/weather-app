import React from 'react';
import planet from '../img/planet.png';
import mist from '../img/mist.png';

function Nowhere() {
  return (
    <div className="nowhere">
      <img src={mist} alt="mist" className="nowhere__mist" />
      <img
        src={planet}
        alt="planet"
        className="nowhere__planet nowhere__planet--blur"
      />
      <img src={planet} alt="planet" className="nowhere__planet" />
    </div>
  );
}

export default Nowhere;
