import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const HotelBookingForm = () => {
    const [city, setCity] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/hotelList', { state: { selectedCity: city } });
    };

    return (
        <div className='tite'>
        <div className="container">
            <h1>Ready to find a great hotel deal !</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">City:</label>
                <select
                    className="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                >
                    <option value="">Select a city</option>
                    <option value="Bangalore">Banglore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Palakkad">Chicago</option>
                    <option value="Salem">Salem</option>
                    <option value="Theni">Theni</option>
                </select>

                <label htmlFor="arrival-date">Date of Arrival:</label>
                <input
                    type="date"
                    id="arrival-date"
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                    required
                />

                <label htmlFor="departure-date">Date of Departure:</label>
                <input
                    type="date"
                    id="departure-date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    required
                />

                <button type="submit">Search Hotels</button>
            </form>
        </div></div>
    );
};

export default HotelBookingForm;
