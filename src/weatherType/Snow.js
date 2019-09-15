import React from 'react';
import GrassItem from '../weatherType/Items/GrassItem';

function Snow({ weatherID, timeID }) {
  return (
    <div className="snow">
      <GrassItem weatherID={weatherID} timeID={timeID}></GrassItem>
    </div>
  );
}

export default Snow;
