import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../../components/UI/Button/Button";

class OrderSummary extends Component {
    // this could be a function cpt if it wasn't for tests with componentDidUpdate
    /* componentDidUpdate() {
        console.log("OS update");
    } */

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (igKey) => {
                return (
                    <li className="price list-group-item" key={igKey}>
                        {igKey} <span>{this.props.ingredients[igKey]}</span>
                    </li>
                );
            }
        );
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with:</p>
                <ul className="finalorder list-group">{ingredientSummary}</ul>
                <p className="my-3">
                    Total price: <strong>{this.props.price.toFixed(2)}$</strong>
                </p>
                <p>Continue to Checkout?</p>
                <div className="btn-group">
                    <Button
                        btnType="btn-success"
                        clicked={this.props.purchaseContinued}>
                        Continue
                    </Button>
                    <Button
                        btnType="btn-outline-danger"
                        clicked={this.props.purchaseCanceled}>
                        Cancel
                    </Button>
                </div>
            </Aux>
        );
    }
}

export default OrderSummary;
