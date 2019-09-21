import React from 'react';

function SnowItem({ timeID }) {
  let darkRain = [{}, {}, {}];
  if (timeID === 'n') {
    darkRain = [
      { filter: 'brightness(.5) blur(1.75px)' },
      { filter: 'brightness(.5) blur(1px)' },
      { filter: 'brightness(.5) blur(1.75px)' }
    ];
  }

  return (
    <>
      <div className="snow-item snow-item--front" style={darkRain[0]}></div>
      <div className="snow-item snow-item--middle" style={darkRain[1]}></div>
      <div className="snow-item snow-item--back" style={darkRain[2]}></div>
    </>
  );
}

export default SnowItem;
