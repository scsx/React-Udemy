import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountAsNumber = +enteredAmount

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountAsNumber < 1 ||
            enteredAmountAsNumber > 5
        ) {
            setAmountIsValid(false)
            return
        }
        props.onAddToCart(enteredAmountAsNumber)
    }

    return (
        <>
            <form
                className='orderform d-flex align-items-end justify-content-end'
                onSubmit={submitHandler}>
                <Input
                    ref={amountInputRef}
                    label=''
                    input={{
                        id: props.id,
                        type: 'number',
                        min: '0',
                        max: '5',
                        step: '1',
                        defaultValue: '1',
                        className: 'form-control'
                    }}
                />
                <button type='submit' className='btn btn-secondary'>
                    + Add
                </button>
            </form>

            {!amountIsValid && (
                <p className='fw-bold mt-3 lh-sm'>
                    Please enter an amount between 1 and 5
                </p>
            )}
        </>
    )
}

export default MealItemForm
