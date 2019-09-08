import React, { useEffect } from 'react';

import tumbleweed from '../../img/tumbleweed.png';

function DryItem() {
  useEffect(() => {
    document.body.style =
      'background: linear-gradient(rgb(0, 0, 0), rgb(56, 56, 56));';
    return () => {
      document.body.style =
        'background: linear-gradient(rgb(0, 68, 255), rgb(0, 195, 255));';
    };
  });
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
