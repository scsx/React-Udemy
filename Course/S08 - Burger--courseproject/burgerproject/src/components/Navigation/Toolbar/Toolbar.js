import React, { useState } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

// BIG PROBLEMS IN CODE VERSION TO COURSE CHANGE WHAT'S DIFFERENT SINCE:
// https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8125740

const toolbar = (props) => {
    // all use of state is to show/hide mobile menu when clicking navbar-toggler
    const [sidebarState, sidebarChange] = useState({
        show: false
    });

    const showSidebarToggle = () => {
        sidebarChange({
            show: !sidebarState.show
        });
    };

    return (
        <header className="mainheader">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Logo />
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={showSidebarToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={
                        !sidebarState.show
                            ? "navbar-collapse collapse"
                            : "navbar-collapse"
                    }
                    id="navbarNav">
                    <NavigationItems />
                </div>
            </nav>
        </header>
    );
};

export default toolbar;
