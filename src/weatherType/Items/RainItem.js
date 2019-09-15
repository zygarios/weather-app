import React from 'react';

function RainItem({ timeID }) {
  let darkRain = null;
  if (timeID === 'n') {
    darkRain = { filter: 'brightness(.6)' };
  }

  return (
    <>
      <div className="rain-item rain-item--front" style={darkRain}></div>
      <div className="rain-item rain-item--middle" style={darkRain}></div>
      <div className="rain-item rain-item--back" style={darkRain}></div>
    </>
  );
}

export default RainItem;
