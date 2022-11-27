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
                        <h3>Animal Planet</h3>
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
        </div>
    );
};

export default Header;