import React, {useState} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
// import { NavLink } from 'react-router-dom'
const Header = (props) => {
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
                            <NavLink href="/" activeClassName="active" exact path="/">Shop</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/basket" activeClassName="active" exact path="/">Basket</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login" activeClassName="active" exact path="/">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;