import React, { Component } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

class Toolbar extends Component {
    sidebar = "navbar-collapse collapse";
    showSidebar = false;
    showSidebarToggle = () => {
        this.showSidebar = !this.showSidebar;
        console.log(this.showSidebar);
        console.log(this.sidebar);
    };

    render() {
        if (this.showSidebar) {
            this.sidebar = "navbar-collapse";
        }
        return (
            <header className="mainheader">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <Logo />
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.showSidebarToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={this.sidebar} id="navbarNav">
                        <NavigationItems />
                    </div>
                </nav>
            </header>
        );
    }
}

export default Toolbar;
