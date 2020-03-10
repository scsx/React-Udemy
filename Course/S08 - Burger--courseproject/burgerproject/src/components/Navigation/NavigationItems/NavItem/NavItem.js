import React from "react";
import { NavLink } from "react-router-dom";

// "active" is the class for the active <li>
const naviItem = (props) => (
    <li className="nav-item">
        {/*
        <a
            className={props.active ? "nav-link active" : "nav-link"}
            href={props.link}>
            {props.children}
        </a>
        */}
        <NavLink to={props.link} className="nav-link" exact={props.exact}>{props.children}</NavLink>
    </li>
);

export default naviItem;
