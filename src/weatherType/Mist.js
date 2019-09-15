import React from 'react';
import GrassItem from '../weatherType/Items/GrassItem';
function Mist({ darkitem, timeID }) {
  return (
    <div className="landscape__mist">
      <GrassItem timeID={timeID}></GrassItem>
    </div>
  );
}

export default Mist;
