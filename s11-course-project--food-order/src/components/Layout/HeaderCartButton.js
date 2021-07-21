import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
    const [buttonHighlighted, setButtonHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)

    // Object destructuring = same as cartCtx.items
    const { items } = cartCtx
    // Get number of products (ex: 3 buns and 1 coke = 4 items)
    const numberOfCartItems = items.reduce((cur, item) => {
        return cur + item.amount
    }, 0)

    const btnClasses = `btn cartbtn ${buttonHighlighted ? 'bump' : ''}`

    useEffect(() => {
        if (cartCtx.items.length === 0) return
        setButtonHighlighted(true)

        const animTimer = setTimeout(() => {
            setButtonHighlighted(false)
        }, 300) // 0.3s is the time of CSS anim

        // cleanup function
        return () => {
            clearTimeout(animTimer)
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClickToShowCart}>
            <CartIcon />
            <span>Your order</span>
            <div className='badge'>{numberOfCartItems}</div>
        </button>
    )
}

export default HeaderCartButton
