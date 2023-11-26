import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';


const Forecast = ({ weatherData, setHourlyForecast }) => {
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (weatherData) {
      // Extract and set the 5-day forecast
      const fiveDayData = weatherData.list.filter((reading) =>
        reading.dt_txt.includes('12:00:00')
      );
      setFiveDayForecast(fiveDayData);
    }
  }, [weatherData]);

  const getDayOfWeek = (dateString) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex];
  };

  const handleCardClick = (day) => {
      // Filter the hourly forecast data for the selected day
      var selectedDayData = weatherData.list.filter((data) =>
        data.dt_txt.includes(day.toString().split(' ')[0])
      );
  
      setHourlyForecast(selectedDayData);
  
      // Navigate to the HourlyForecast component with the filtered data
      navigate(`/${getDayOfWeek(day)}`);
  };

  const getTempMinMax = (day) => {
    var selectedDayData = weatherData.list.filter((data) =>
      data.dt_txt.includes(day.toString().split(' ')[0])
    );
    let lowTemperature = Infinity;
    let highTemperature = -Infinity;

    selectedDayData.forEach(element => {
      let tempMin = element.main.temp_min;
      let tempMax = element.main.temp_max;
      if (tempMin !== '' && tempMin < lowTemperature) {
        lowTemperature = tempMin;
      }
  
      if (tempMax !== '' && tempMax > highTemperature) {
        highTemperature = tempMax;
      }
    });
    return `${highTemperature} °C / ${lowTemperature} °C`;
  }

  if (!fiveDayForecast.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4">
      <h1 className="text-center mt-4 mb-5">5-Day Weather Forecast</h1>
      <div className="d-flex flex-wrap justify-content-center align-items-start">
        {fiveDayForecast.map((day) => (
          <Tilt key={day.dt}>
            <div
              onClick={() => handleCardClick(day.dt_txt)}
              className="card mb-3 mx-3 shadow p-3 mb-5 bg-white rounded position-relative"
            >
              <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} className='weather-icon' alt={day.icon} />
              <div className="card-body">
                <h5 className="card-title">Date: {getDayOfWeek(day.dt_txt)}</h5>
                <p className="card-text">Weather: {day.weather[0].description}</p>
                <p className="card-text">Temperature: {day.main.temp} °C</p>
                <p className="card-text">
                  High/Low: {getTempMinMax(day.dt_txt)}
                </p>
                <p className="card-text">Humidity: {day.main.humidity}%</p>
                <p className="card-text">Wind: {day.wind.speed} m/s</p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Forecast;