import React from 'react'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = () => {
    return (
        <button className="btn">
            <CartIcon />
            <div className="badge">
                3
            </div>
        </button>
    )
}

export default HeaderCartButton
