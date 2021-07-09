import React, { useContext } from 'react'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
    const cartCtx = useContext(CartContext)
    const price = `${props.meal.price.toFixed(2)} €`
    const addToCartHandler = (amount) => {
        
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className='list-group-item'>
            <div className='row'>
                <div className='col'>
                    <h3>{props.meal.name}</h3>
                    <p>{props.meal.description}</p>
                    <div className='price'>{price}</div>
                </div>
                <div className='col-3 alright'>
                    <MealItemForm
                        onAddToCart={addToCartHandler}
                        id={`amount_${props.meal.id}`}
                    />
                </div>
            </div>
        </li>
    )
}

export default MealItem
