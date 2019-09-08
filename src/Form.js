import React, { useState } from 'react';
import './styles/Form.css';

function Form({ getWeather }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    const cityName = inputValue;
    setInputValue('');
    getWeather(cityName);
  };

  return (
    <form className="weather-form" onSubmit={handleSubmitForm}>
      <label htmlFor="city">
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Search a city"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        Check current weather
      </label>
      <input type="submit" value="Search"></input>
    </form>
  );
}

export default Form;
