import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        )
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
            console.log(state.items)
        } else {
            updatedItems = state.items.concat(action.item)
            console.log(state.items)
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        )
        const existingItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems

        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id)
            console.log(state.items)
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            }
            updatedItems = [...state.items]
            updatedItems[existingItem] = updatedItem
            console.log(state.items)
        }

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
