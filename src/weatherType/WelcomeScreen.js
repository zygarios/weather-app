import React from 'react';
import brightCloud from './../img/bright-cloud.png';
import SunItem from './Items/SunItem.js';
import birds from '../img/birds.gif';

function WelcomeScreen() {
  return (
    <div className="welcome">
      <img className="welcome__birds" src={birds} alt="birds" />
      <img
        src={brightCloud}
        alt="cloud"
        className="welcome__welcome-cloud welcome__welcome-cloud--back"
      />
      <img
        src={brightCloud}
        alt="cloud"
        className="welcome__welcome-cloud welcome__welcome-cloud--middle"
      />
      <img
        src={brightCloud}
        alt="cloud"
        className="welcome__welcome-cloud welcome__welcome-cloud--front"
      />
      <SunItem></SunItem>
    </div>
  );
}

export default WelcomeScreen;
