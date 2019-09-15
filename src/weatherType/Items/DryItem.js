import React from 'react';

import tumbleweed from '../../img/tumbleweed.png';

function DryItem() {
  return (
    <>
      <div className="landscape__dry" alt="dryland">
        <img
          className="landscape__tumbleweed landscape__tumbleweed--shadow3d"
          src={tumbleweed}
          alt="tumbleweed-shadow3d"
        />
        <img
          className="landscape__tumbleweed landscape__tumbleweed--shadow"
          src={tumbleweed}
          alt="tumbleweed-shadow"
        />
        <img
          className="landscape__tumbleweed landscape__tumbleweed--item"
          src={tumbleweed}
          alt="tumbleweed"
        />
      </div>
    </>
  );
}

export default DryItem;
