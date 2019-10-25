import React from "react";
import Aux from "../../hoc/Auxiliary";

const layout = (props) => (
    <Aux>
        {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="xxx">
                Make a burger!
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="xxx">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="xxx">
                            Features
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="xxx">
                            Pricing
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <main className="container">{props.children}</main>
    </Aux>
);

export default layout;
