import React from "react";
import NavItem from "./NavItem/NavItem";

const navigationItems = (props) => (
    <ul className="navbar-nav">
        <NavItem link="/" active>
            Burger Builder
        </NavItem>
        <NavItem link="/checkout">Checkout</NavItem>
    </ul>
);

export default navigationItems;
