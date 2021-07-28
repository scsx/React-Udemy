import { useState } from 'react'

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)

    const enteredNameIsValid = enteredName.trim() !== ''
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true)
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()
        setEnteredNameTouched(true)
        if (!enteredNameIsValid) {
            return
        }
        console.log('Form submitted with name ' + enteredName)
        setEnteredName('')
        setEnteredNameTouched(false)
    }

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control is-invalid'
        : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='input-group input-group-lg mb-3'>
                <input
                    type='text'
                    className={nameInputClasses}
                    placeholder='name'
                    id='name'
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                <button
                    className='btn btn-primary'
                    type='submit'
                    id='button-addon2'>
                    Submit
                </button>
            </div>
            {nameInputIsInvalid && (
                <p className='text-white'>Name must not be empty</p>
            )}
        </form>
    )
}

export default SimpleInput
