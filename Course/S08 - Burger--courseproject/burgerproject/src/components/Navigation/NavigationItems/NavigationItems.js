import React from "react";
import NavItem from "./NavItem/NavItem";

const navigationItems = (props) => (
    <ul className="navbar-nav">
        <NavItem link="/" exact>Burger Builder</NavItem>
        <NavItem link="/orders">Orders</NavItem>
    </ul>
);

export default navigationItems;
