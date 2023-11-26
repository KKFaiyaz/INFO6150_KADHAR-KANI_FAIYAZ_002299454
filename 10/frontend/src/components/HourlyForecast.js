// HourlyForecast.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

const HourlyForecast = ({ hourlyForecast }) => {
  const { day } = useParams();

  if (!hourlyForecast || !Array.isArray(hourlyForecast)) {
    return <div>Loading...</div>; // or display an error message
  }

  function getWeatherAnimationClass(day) {
    const weatherDescription = day.weather[0]?.main.toLowerCase();

    if (weatherDescription.includes('rain')) {
      return 'card-animation-rainy';
    } else if (weatherDescription.includes('cloud')) {
      return 'card-animation-cloudy';
    } else if (weatherDescription.includes('clear') || weatherDescription.includes('sunny')) {
      return 'card-animation-sunny';
    } else {
      return 'card-animation-default';
    }
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Hourly Forecast for {day} </h1>
      <div className="d-flex flex-wrap justify-content-center align-items-start">
        {hourlyForecast.map((hour) => (
        <Tilt key={hour.dt} className='mx-3'>
            <div
            className={`card mb-3 shadow mb-5 bg-white rounded`}
            style={{ maxWidth: '16rem', width: '100%', transform: 'rotate(-2deg)' }}
            >
                <div className={`card-body ${getWeatherAnimationClass(hour)}`}>
                    <h5 className="card-title">{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</h5>
                    <p className="card-text">Temperature: {hour.main?.temp} °C</p>
                    <p className="card-text">Weather: {hour.weather[0]?.description}</p>
                    <p className="card-text">Humidity: {hour.main?.humidity}%</p>
                    <p className="card-text">Wind: {hour.wind?.speed} m/s</p>
                </div>
            </div>
        </Tilt>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
