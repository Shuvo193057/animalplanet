import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (

        <div>
            <Navbar id="navbar" bg="dark" variant="dark">
                <Container id="contain">
                    {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link href="#adoption">Adoption</Nav.Link>
                        <Nav.Link href="#food">Food</Nav.Link>
                        <Nav.Link href="#accessories">Accessories</Nav.Link>
                        <Nav.Link href="#training">Training</Nav.Link>
                        <Nav.Link href="#medicare">Medicare</Nav.Link>
                        <Nav.Link href="#register">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <button id="reg">Register</button>

            </div>
            {/* <div>
                <body style="background-color:#1c87c9;">

                </body>
            </div> */}
        </div>

    );
};

export default Header;