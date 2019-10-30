import React from "react";

// "active" is the class for the active <li>
const naviItem = (props) => (
    <li className="nav-item">
        <a
            className={props.active ? "nav-link active" : "nav-link"}
            href={props.link}>
            {props.children}
        </a>
    </li>
);

export default naviItem;
