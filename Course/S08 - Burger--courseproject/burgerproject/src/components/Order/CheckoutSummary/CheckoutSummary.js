import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => {
    return (
        <div className="checkoutSummary">
            <h1>We hope it's tasty!</h1>
            <div className="burgerComponent">
                <Burger ingredients={props.ingredients}/>
            </div>
            <div className="btnbox">
                <div className="btn-group">
                    <Button btnType="btn btn-secondary" clicked={props.checkoutCancelled}>Cancel</Button>
                    <Button btnType="btn btn-success" clicked={props.checkoutContinued}>Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSummary;