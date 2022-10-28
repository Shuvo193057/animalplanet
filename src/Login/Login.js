import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <h1> Sign UP </h1>
            <div className="inputgroup">
                <p>Username</p>
                <input placeholder="Enter your username"></input>
                <p>Password</p>
                <input placeholder="Enter your password"></input>
            </div>
            <div className="Submit">
                <button> Submit </button>
            </div>


        </div>
    );
};

export default Login;