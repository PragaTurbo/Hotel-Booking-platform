import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function handleSignup(e) {
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert("Email is already registered. Please use another email or login.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Password mismatch");
            return;
        }
        if (password.length < 8) {
            alert("Password should be at least 8 characters long.");
            return;
        }
        if(mobile==="0000000000"&&mobile==="1111111111")
        {
            alert("Invalid mobile number");
            return;
        }
        if(username.length<3)
        {
            alert("Invalid")
        }
        const newUser = {
            email: email,
            username: username,
            password: password,
            mobile: mobile,
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert("Registration successful! Please log in.");
        navigate("/"); 
    }

    return (
        <div className='tit'>
            <h1 className='he'>Hotelpedia</h1>
        <div className="signup-container">
            <form onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="text"
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Create Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                />
                <input 
                    type="tel"
                    placeholder="91+ Mobile Number" 
                    value={mobile} 
                    onChange={(e) => setMobile(e.target.value)}
                    pattern="[0-9]{10}"
                    required 
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
    );
};

export default Signup;
