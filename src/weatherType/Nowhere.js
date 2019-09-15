import React from 'react';
import planet from '../img/planet.png';
import mist from '../img/mist.png';
import DryItem from '../weatherType/Items/DryItem';
import stars from '../img/stars.png';
// import sign from '../img/wood-sign.png';

function Nowhere() {
  return (
    <div className="nowhere">
      <img src={mist} alt="mist" className="nowhere__mist" />
      <img
        src={planet}
        alt="planet"
        className="nowhere__planet nowhere__planet--blur"
      />
      {/* <img className="nowhere__sign" src={sign} alt="wood sign" /> */}
      <img src={planet} alt="planet" className="nowhere__planet" />
      <img src={stars} alt="stars" />
      <DryItem></DryItem>;
    </div>
  );
}

export default Nowhere;
