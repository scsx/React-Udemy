import useInput from '../hooks/use-input'

const MultipleInputs = () => {
    const validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    // Custom hooks; using aliases:
    // Name
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput((value) => value.trim() !== '') // The validation fn is passed right here, as anonymous fn

    // Email
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => validateEmail(value))

    let formIsValid = false
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    // Form Submission
    const formSubmissionHandler = (event) => {
        event.preventDefault()
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return
        }
        console.log('Form submitted with ' + enteredName, enteredEmail)
        resetNameInput()
        resetEmailInput()
    }

    const nameInputClasses = nameInputHasError
        ? 'form-control form-control-lg is-invalid'
        : 'form-control form-control-lg'

    const emailInputClasses = emailInputHasError
        ? 'form-control is-invalid'
        : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <h2>Name & Email</h2>
            <input
                type='text'
                className={nameInputClasses}
                placeholder='name'
                id='name'
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
            />
            {nameInputHasError && <p className='text-white'>Enter a name</p>}
            <div className='input-group input-group-lg my-3'>
                <input
                    type='email'
                    className={emailInputClasses}
                    placeholder='email'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                <button
                    className='btn btn-success'
                    type='submit'
                    disabled={!formIsValid}>
                    Add
                </button>
            </div>
            {emailInputHasError && (
                <p className='text-white'>Email is not valid</p>
            )}
        </form>
    )
}

export default MultipleInputs
