import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <form>
    
        <h3 id="log">Login</h3>

        <label for="email">Email</label>
        <input type="text" id="email"></input>

        <label for="password">Password</label>
        <input type="password" id="password"></input>
        

        <button id= "submit">Submit</button>
    
       
    </form>
    );
};

export default Login;