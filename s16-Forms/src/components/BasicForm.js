import useInput from '../hooks/use-input'

const BasicForm = (props) => {
    // Email validation
    const validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    const IsNotEmpty = (value) => value.trim() !== ''

    // Inputs with custom hooks; using aliases:
    // Name
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput((value) => IsNotEmpty(value)) // The validation fn is passed right here, as anonymous fn

    // Email
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput((value) => validateEmail(value))

    // Form
    let formIsValid = false
    if (enteredNameIsValid || enteredEmail) {
        formIsValid = true
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()
        if (!formIsValid) {
            return
        }
        console.log('Form submitted with ' + enteredName, enteredEmail)
        resetNameInput()
        resetEmailInput()
    }

    // Graphic feedback
    const nameInputClasses = nameInputHasError
        ? 'form-control form-control-lg is-invalid'
        : 'form-control form-control-lg'

    const emailInputClasses = emailInputHasError
        ? 'form-control form-control-lg is-invalid'
        : 'form-control form-control-lg'


    return (
        <form onSubmit={formSubmissionHandler}>
            <h2>Basic form</h2>
            <div className='borderbox'>
                <div className='unit'>
                    <label>Name</label>
                    <input
                        type='text'
                        className={nameInputClasses}
                        placeholder='name'
                        id='name'
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}
                        value={enteredName}
                    />
                    {nameInputHasError && (
                        <p className='text-white'>Enter a name</p>
                    )}
                </div>
                <div className='unit'>
                    <label>E-Mail Address</label>
                    <input
                        type='email'
                        className={emailInputClasses}
                        placeholder='email'
                        id='email'
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        value={enteredEmail || 'sara@gov.com'}
                    />
                    {emailInputHasError && (
                        <p className='text-white'>Email is not valid</p>
                    )}
                </div>
            </div>
            <div className='form-actions'>
                <button
                    className='btn btn-primary btn-lg'
                    type='submit'
                    disabled={!formIsValid}>
                    Proceed
                </button>
            </div>
        </form>
    )
}

export default BasicForm
