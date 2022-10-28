import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div id='mainbody'>
        {/* <div id='logodiv'>
            <Link to="/Home"><img id='logo-pic' src={logo} alt="logo"/></Link> 
        </div> */}
        <nav id='navlink'>
            <Link className='links' to="/Accessories">Accessories</Link>
            <Link className='links' to="/Food">Food</Link>
            <Link className='links' to="/Adoption">Adoption</Link>
            <Link className='links' to="/Medicare">Medicare</Link>
            <Link className='links' to="/Training">Training</Link>
            <Link className='links link-reg' to="/Register">Register</Link>
        </nav>
        
    </div>
    );
};

export default Header;