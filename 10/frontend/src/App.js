import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast';
import HourlyForecast from './components/HourlyForecast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  const apiKey = "14f7c804460fcbd0804c78723affa933";
  const baseURL = "https://api.openweathermap.org/data/2.5/forecast";
  const city = "Boston";
  const units = "metric";

  const usePrevious = (value) => {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      });
      return ref.current;
  };

  const prevWeatherData = usePrevious(weatherData);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        console.log(baseURL);
        const response = await fetch(`${baseURL}?q=${city}&units=${units}&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const responseData = await response.json();
        setWeatherData(responseData);

      } catch (err) {
        console.error('Error fetching weather data:', err);
      }
    }

    if (!weatherData || JSON.stringify(weatherData) !== JSON.stringify(prevWeatherData)) {
        fetchWeatherData();
    }
  }, [apiKey, city, weatherData]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Forecast weatherData={weatherData} setHourlyForecast={setHourlyForecast} />} />
        <Route path='/:day' element={<HourlyForecast hourlyForecast={hourlyForecast} />} />
      </Routes>
    </Router>
  );
}

export default App;
