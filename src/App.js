import React from 'react';
import Landscape from './Landscape.js';
import Termometer from './Termometer.js';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Termometer />
      {/* <Form /> */}
      <Landscape />
    </div>
  );
}

export default App;
