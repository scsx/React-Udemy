import './cart.scss'

const CartItem = (props) => {
    const price = `${props.price.toFixed(2)}€`

    return (
        <li className='list-group-item'>
            <div className='row'>
                <div className='col'>
                    <h4 className='mb-1'>{props.name}</h4>
                    <p className='mb-0'>
                        <span className='itemprice'>{price}</span>
                        <span className='itemamount'> x {props.amount}</span>
                    </p>
                </div>
                <div className='col-3 alright impulsivebuy'>
                    <button className='btn btn-outline-dark btn-sm remove' onClick={props.onRemove}>−</button>
                    <button className='btn btn-outline-dark btn-sm add' onClick={props.onAdd}>+</button>
                </div>
            </div>
        </li>
    )
}

export default CartItem
