import React from 'react';
import './styles/Termometer.css';

function Termometer({ temp }) {
  const termometerHeight = temp * 1.4 + 42;
  const red = (temp * 255) / 25;
  const blue = 255 - red;
  return (
    <div className="termometer">
      <div
        className="termometer__fill"
        style={{
          height: `${termometerHeight}%`,
          background: `rgba(${red}, 0, ${blue})`
        }}
      />
      <div className="termometer__tank" />
      <div
        className="termometer__tank termometer__tank--fill-red"
        style={{
          background: `rgba(${red}, 0, ${blue})`
        }}
      />
      <div className="termometer__number-one termometer--number">40 °C</div>
      <div className="termometer__number-two termometer--number">30 °C</div>
      <div className="termometer__number-three termometer--number">20 °C</div>
      <div className="termometer__number-four termometer--number">10 °C</div>
      <div className="termometer__number-five termometer--number">0 °C</div>
      <div className="termometer__number-six termometer--number">-10 °C</div>
      <div className="termometer__number-seven termometer--number">-20 °C</div>
    </div>
  );
}

export default Termometer;
