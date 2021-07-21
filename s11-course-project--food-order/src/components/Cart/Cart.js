import { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    console.log(cartCtx.items)

    const totalAmount = `${Math.max(cartCtx.totalAmount, 0).toFixed(2)}€`
    const hasItems = cartCtx.items.length > 0

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
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

    return (
        <Modal onClickClose={props.onCloseCart}>
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
                ) : <h2 className='noitems'>Please add some food!</h2>}
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
