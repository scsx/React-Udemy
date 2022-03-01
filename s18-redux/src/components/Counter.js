import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const counter = useSelector((state) => state.counter)
    const counterIsShowing = useSelector((state) => state.showCounter)
    const dispatch = useDispatch()

    const incrementHandler = () => dispatch({ type: 'increment' })
    const increaseHandler = () =>
        dispatch({ type: 'increasebyamount', amount: 5 })
    const decrementHandler = () => dispatch({ type: 'decrement' })

    const toggleCounterHandler = () => {
        dispatch({ type: 'toggle' })
    }

    return (
        <main>
            <h1 className='mt-4'>Redux Counter</h1>
            {counterIsShowing && <div className='giantnumber'>{counter}</div>}

            <div className='btn-group'>
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={incrementHandler}>
                    Increment
                </button>
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={increaseHandler}>
                    Increment by 5
                </button>
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={decrementHandler}>
                    Decrement
                </button>
            </div>
            <hr />
            <button onClick={toggleCounterHandler} className='btn btn-primary'>
                Toggle Counter
            </button>
        </main>
    )
}

export default Counter
