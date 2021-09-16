import { useContext, useState } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)

    const cartCtx = useContext(CartContext)

    const totalAmount = `${Math.max(cartCtx.totalAmount, 0).toFixed(2)}€`
    const hasItems = cartCtx.items.length > 0

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const orderHandler = () => {
        setIsCheckout(true)
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true)
        await fetch(
            'https://react-udemy-courseproject-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
            {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    orderedItems: cartCtx.items
                })
            }
        )
        // There's no error handling, assume it works
        setIsSubmitting(false)
        setDidSubmit(true)
        cartCtx.clearCart()
    }

    const cartItems = (
        <ul className='list-group'>
            {cartCtx.items.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                )
            })}
        </ul>
    )

    const modalActions = (
        <div className='btn-group actions'>
            {hasItems && (
                <button
                    type='button'
                    className='btn btn-success'
                    onClick={orderHandler}>
                    Place Order
                </button>
            )}
        </div>
    )

    const cartModalContent = (
        <div className='cart card'>
            {cartItems}
            {hasItems ? (
                <table className='table my-4'>
                    <tbody>
                        <tr>
                            <td>Total amount</td>
                            <td className='alright'>
                                <b>{totalAmount}</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <h2 className='noitems'>Please add some food!</h2>
            )}

            {isCheckout && (
                <Checkout
                    onConfirm={submitOrderHandler}
                    onCloseCart={props.onCloseCart}
                />
            )}
            {!isCheckout && modalActions}
        </div>
    )

    const isSubmittingModalContent = (
        <div className='cart card submitting'>
            <h3>Placing your order...</h3>
        </div>
    )

    const didSubmitModalContent = (
        <div className='cart card submitting'>
            <h3>Your food is on the way!</h3>
            <p>Wait a bit for a guy in a bike to show up.</p>
            <button
                type='button'
                className='btn btn-success'
                onClick={props.onCloseCart}>
                Close dialog
            </button>
        </div>
    )

    return (
        <Modal onClickClose={props.onCloseCart}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    )
}

export default Cart
