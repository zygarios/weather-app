import React from 'react';
import birds from '../img/birds.gif';
import GrassItem from '../weatherType/Items/GrassItem';

function ClearSky({ timeID, weatherID }) {
  return (
    <div className="clear-sky">
      <img className="birds" src={birds} alt="birds" />
      <GrassItem timeID={timeID} weatherID={weatherID}></GrassItem>
    </div>
  );
}

export default ClearSky;
