import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)
    // Get number of products (ex: 3 buns and 1 coke = 4 items)
    const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
        return cur + item.amount
    }, 0)

    return (
        <button className='btn cartbtn' onClick={props.onClickToShowCart}>
            <CartIcon />
            <span>Your order</span>
            <div className='badge'>{numberOfCartItems}</div>
        </button>
    )
}

export default HeaderCartButton
