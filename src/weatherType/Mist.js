import React from 'react';
import GrassItem from '../weatherType/Items/GrassItem';
import mist from '../img/mist.png';

function Mist({ weatherID, darkitem, timeID }) {
  console.log(darkitem);
  return (
    <div className="mist">
      <img
        src={mist}
        alt="mist"
        className="mist__mistitem mist__mistitem--front"
        style={darkitem && { filter: 'brightness(.6)' }}
      />
      <img
        src={mist}
        alt="mist"
        className="mist__mistitem mist__mistitem--back"
        style={darkitem && { filter: 'brightness(.6)' }}
      />
      <GrassItem timeID={timeID} weatherID={weatherID}></GrassItem>
    </div>
  );
}

export default Mist;
