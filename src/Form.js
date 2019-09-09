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
    <form
      className="weather-form"
      onSubmit={handleSubmitForm}
      autoComplete="off"
    >
      <label htmlFor="city" className="weather-form__label">
        Check current weather
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Search a city"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="weather-form__input"
        />
      </label>
      <input type="submit" value="GO!" className="weather-form__button"></input>
    </form>
  );
}

export default Form;
