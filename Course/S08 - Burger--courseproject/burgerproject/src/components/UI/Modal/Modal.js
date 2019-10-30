import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    // added for performance:
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.showModal !== this.props.showModal;
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    showModal={this.props.showModal}
                    clickedModal={this.props.modalClosed}
                />
                <div
                    className="Modal"
                    style={{
                        transform: this.props.showModal
                            ? "translateY(0)"
                            : "translateY(-100vh)",
                        opacity: this.props.showModal ? "1" : "0"
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;
