const Cart = (props) => {
    const cartItems = (
        <ul>
            {[
                {
                    id: 'c1',
                    name: 'Sushi',
                    amount: 2,
                    price: 12.99
                }
            ].map((item) => {
                ;<li>{item.name}</li>
            })}
        </ul>
    )

    return (
        <div className='cart card'>
            {cartItems}
            <div className='card-body'>
                <h5 className='card-title'>Total amount</h5>
                <p className='card-text'>43.56</p>
                <div className='btn-group actions'>
                    <button type='button' className='btn btn-primary'>
                        Close
                    </button>
                    <button type='button' className='btn btn-primary'>
                        Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
