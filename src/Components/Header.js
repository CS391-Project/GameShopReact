import React, {useState} from 'react';
import {
    Button,
    Col,
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Row
} from 'reactstrap';
import { NavLink as ReactLink } from 'react-router-dom'; // reactstrap navlink wont detect active, so we have to use both
import Item from "./Item";
import * as functions from "../functions";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(functions.isLoggedIn());

    const toggle = () => setIsOpen(!isOpen);

    const signOut = () => {
        functions.signOut()
        alert("Succesfully signed out...");
        setLoggedIn(false)
    }

    return (
        <div className="pb-2">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">GameShop</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={ReactLink} exact to="/" activeClassName="active" >Shop</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/basket" activeClassName="active" >Basket</NavLink>
                        </NavItem>

                        {isLoggedIn
                            ?
                            <>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/login" activeClassName="active" onClick={
                                        signOut
                                    }>Sign Out</NavLink>
                                </NavItem>
                            </>
                            :
                            <>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/login" activeClassName="active" >Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/signup" activeClassName="active" >Sign Up</NavLink>
                                </NavItem>
                            </>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;