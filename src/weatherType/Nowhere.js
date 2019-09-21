import React from 'react';
import planet from '../img/planet.png';
import mist from '../img/mist.png';
import DryItem from '../weatherType/Items/DryItem';
import stars from '../img/stars.png';

function Nowhere() {
  return (
    <div className="nowhere">
      <img src={mist} alt="mist" className="nowhere__mist" />
      <img
        src={mist}
        alt="mist"
        className="mist__mistitem mist__mistitem--front"
      />
      <img
        src={mist}
        alt="mist"
        className="mist__mistitem mist__mistitem--back"
      />
      <img
        src={planet}
        alt="planet"
        className="nowhere__planet nowhere__planet--blur"
      />
      <img src={planet} alt="planet" className="nowhere__planet" />
      <img src={stars} className="stars" alt="stars" />
      <DryItem></DryItem>;
    </div>
  );
}

export default Nowhere;
