import React from 'react';
import woodSign from './img/wood-sign.png';

function Sign({ result }) {
  return (
    <div className="sign">
      <h1 className="sign__result">{result}</h1>
      <img src={woodSign} className="sign__wood-sign" alt="wood sign" />
    </div>
  );
}

export default Sign;
