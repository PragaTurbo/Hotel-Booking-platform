import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import HotelCard from './components/HotelCard';
import Home from './components/Home';
import HotelList from './components/HotelList.js';
import './App.css';
import Pay from './components/Pay.js'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/hotelcard" element={<HotelCard/>} />                  
                    <Route path="/hotelList" element={<HotelList/>} />                  
                    <Route path="/pay" element={<Pay/>} />                  
                </Routes>
            </div>
        </Router>
    );
}

export default App;
