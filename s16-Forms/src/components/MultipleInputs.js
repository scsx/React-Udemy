import { useState } from 'react'

const MultipleInputs = () => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

    const enteredNameIsValid = enteredName.trim() !== ''
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
    const enteredEmailIsValid = enteredEmail.includes('@')
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

    let formIsValid = false
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    // Name
    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true)
    }

    // Email
    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const emailInputBlurHandler = () => {
        setEnteredEmailTouched(true)
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()
        setEnteredNameTouched(true)
        setEnteredEmailTouched(true)
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return
        }
        console.log('Form submitted with ' + enteredName, enteredEmail)
        setEnteredName('')
        setEnteredEmail('')
        setEnteredNameTouched(false)
        setEnteredEmailTouched(false)
    }

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control form-control-lg is-invalid'
        : 'form-control form-control-lg'

    const emailInputClasses = emailInputIsInvalid
        ? 'form-control is-invalid'
        : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <input
                type='text'
                className={nameInputClasses}
                placeholder='name'
                id='name'
                onChange={nameInputChangeHandler}
                onBlur={nameInputBlurHandler}
                value={enteredName}
            />
            {emailInputIsInvalid && (
                <p className='text-white'>Enter a valid email</p>
            )}
            <div className='input-group input-group-lg my-3'>
                <input
                    type='email'
                    className={emailInputClasses}
                    placeholder='email'
                    id='email'
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                <button
                    className='btn btn-primary'
                    type='submit'
                    disabled={!formIsValid}>
                    Add
                </button>
            </div>
            {nameInputIsInvalid && (
                <p className='text-white'>Name must not be empty</p>
            )}
        </form>
    )
}

export default MultipleInputs
