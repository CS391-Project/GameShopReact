import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import { NavLink as ReactLink } from 'react-router-dom'; // reactstrap navlink wont detect active, so we have to use both

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
                        <NavItem>
                            <NavLink tag={ReactLink} to="/login" activeClassName="active" >Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;