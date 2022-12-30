import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = (props) => {

    const [show, setShow] = useState(true);

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
                        <NavLink className="links" to="/addcart" setShow={setShow}><ShoppingCartIcon />{props.Cart.length}</NavLink>

                    </Nav>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;