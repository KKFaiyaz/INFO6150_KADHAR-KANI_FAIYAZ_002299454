import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUS/AboutUs';
import Jobs from './components/Jobs/Jobs';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
