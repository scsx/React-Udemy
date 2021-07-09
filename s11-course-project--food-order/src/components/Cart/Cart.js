import { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}€`
    const hasItems = cartCtx.items.length > 0

    const cartItemAddHandler = (id) => {}

    const cartItemRemoveHandler = (id) => {}

    const cartItems = (
        <ul className='list-group'>
            {cartCtx.items.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={cartItemRemoveHandler}
                        onAdd={cartItemAddHandler}
                    />
                )
            })}
        </ul>
    )

    return (
        <Modal onClickClose={props.onCloseCart}>
            <div className='cart card'>
                {cartItems}
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
                <div className='btn-group actions'>
                    {hasItems && (
                        <button type='button' className='btn btn-success'>
                            Place Order
                        </button>
                    )}
                </div>
            </div>
        </Modal>
    )
}

export default Cart
