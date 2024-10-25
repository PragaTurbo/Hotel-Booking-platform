import React from 'react';
import './HotelCard.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const HotelCard = ({ hotel }) => {
    const navigate = useNavigate();
    const getCustomersData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/customers")
            .then(data => console.log(data.data))
            .catch(error => console.log(error));
    };
    function pay()
    {
        alert("Proceed to payment");
        navigate('/pay')
    }
    return (
        <div className='titee'>
        
        <div className="con">
        <div className="container">
            <img src={hotel.imageUrl} alt={`${hotel.name}`} className="hotel-image" />
            <div className="hotel-info">
                <h2>{hotel.name}</h2>
                <p>{hotel.city}</p>
                <p>{hotel.description}</p>
                <p><strong>Price per night:</strong> ₹{hotel.price}</p>
                <button onClick={pay}>Book</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default HotelCard;
