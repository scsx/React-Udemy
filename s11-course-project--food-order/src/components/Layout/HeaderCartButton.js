import React from 'react'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = () => {
    return (
        <button className="btn cartbtn">
            <CartIcon />
            <span>Your order</span>
            <div className="badge">
                0.00 €
            </div>
        </button>
    )
}

export default HeaderCartButton
