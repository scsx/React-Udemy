import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

// BIG PROBLEMS IN CODE VERSION TO COURSE CHANGE WHAT'S DIFFERENT SINCE:
// https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8125740

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar />
                {/* <SideDrawer /> - Not used because Bootstrap doesnt need */}
                <main className="container">{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
