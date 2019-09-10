import React, { useState } from 'react';
import './styles/Form.css';

function Form({ getWeather }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    const cityName = inputValue;
    if (cityName === '') return;
    getWeather(cityName);
    setInputValue('');
  };

  return (
    <form
      className="weather-form"
      onSubmit={handleSubmitForm}
      autoComplete="off"
    >
      <h1 className="weather-form__text">
        Check current weather
        <input
          type="text"
          name="city"
          placeholder="Search a city"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className="weather-form__input"
        />
      </h1>
      <input type="submit" value="GO!" className="weather-form__button"></input>
    </form>
  );
}

export default Form;
