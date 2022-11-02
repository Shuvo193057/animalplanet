import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='container'>
            <h3>
            <h1> Sign UP </h1>
            <div className='intro'>
                <p>Username</p>
                <input placeholder="Enter your username"></input>
                <p>Email</p>
                <input placeholder="Enter your password"></input>
                <p>Address</p>
                <input placeholder="Enter your password"></input>
                <p>Phone Number</p>
                <input placeholder="Enter your password"></input>
                <p>Password</p>
                <input placeholder="Enter your password"></input>
                <p>Confirm Password</p>
                <input placeholder="Enter your password"></input>

            </div>
            <div className="Submit">
                <button> Submit </button>
            </div>

            </h3>

        </div>

    );
};

export default Register;