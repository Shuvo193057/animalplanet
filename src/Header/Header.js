import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (

        <div>
            <Navbar id="navbar" bg="dark" variant="dark">
                <Container id="contain">
                    <div id="logo">
                    <NavLink className="links" to="/">Animal Planet</NavLink>
                    </div>
                    <Nav id="navigation">
                    
                        <NavLink className="links" to="/adoption">Adoption</NavLink>
                        <NavLink className="links" to="/food">Food</NavLink>
                        <NavLink className="links" to="/accessories">Accessories</NavLink>
                        <NavLink className="links" to="/training">Training</NavLink>
                        <NavLink className="links" to="/medicare">Medicare</NavLink>
                        <NavLink className="links" to="/register">Register</NavLink>
                    </Nav>
                </Container>
            </Navbar>
   {/* <div>
                <body style="background-color:#1c87c9;">

                </body>
            </div> */}
        </div>

);
};

export default Header;