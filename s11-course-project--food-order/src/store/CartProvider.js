import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    )

    const addItemToCartHandler = (itemToAdd) => {
        dispatchCartAction({
            type: 'ADD',
            item: itemToAdd
        })
    }
    const removeItemFromCartHandler = (itemId) => {
        dispatchCartAction({
            type: 'REMOVE',
            id: itemId
        })
    }

    const cartContextModel = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContextModel}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
