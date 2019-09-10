import React from 'react';

function Filter({ timeID }) {
  return (
    <div
      className={`filter`}
      style={{
        background: `rgba(9, 40, 79, .5)`,
        zIndex: 15,
        filter: 'contrast(15)'
      }}
    ></div>
  );
}

export default Filter;
