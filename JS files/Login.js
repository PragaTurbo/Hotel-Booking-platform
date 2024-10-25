import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();


        const users = JSON.parse(localStorage.getItem('users')) || [];


        const user = users.find(user => user.email === mail && user.password === pass);

        if (user) {
            localStorage.setItem('user', JSON.stringify({ email: mail }));
            navigate('/home');
        } else {
            alert("Invalid email or password.");
        }
    };

    return (
        <div className='tit'>
            <h1 className='he'>Hotelpedia</h1>
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="E-mail" onChange={(e) => setMail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
        </div>
    );
};

export default Login;
