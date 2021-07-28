import useInput from '../hooks/use-input'

const BasicForm = (props) => {
    // Email validation
    const validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    // Inputs with custom hooks; using aliases:
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
    } = useInput((value) => validateEmail(value))

    // Radios
    const {
        value: enteredRadio,
        isValid: enteredRadioIsValid,
        hasError: radioInputHasError,
        valueChangeHandler: radioChangeHandler,
        inputBlurHandler,
        reset
    } = useInput((radios) => radios !== 'option4', 'option4')

    // Form
    let formIsValid = false
    if (!enteredNameIsValid || !enteredEmail || !enteredRadioIsValid) {
        formIsValid = true
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()
        if (!enteredNameIsValid || !enteredEmailIsValid) {
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

    const radioInputClasses = radioInputHasError
        ? 'unit radios is-invalid'
        : 'unit radios'

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
                <div className={radioInputClasses}>
                    <label className='d-block mb-2'>Plan</label>
                    <h1>{enteredRadioIsValid ? 'emailInputHasError' : 'no error'}</h1>
                    <div className='row'>
                        <div className='col'>
                            <div className='form-check form-check-inline'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='inlineRadioOptions'
                                    id='inlineRadio1'
                                    value='option1'
                                    onChange={radioChangeHandler}
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='inlineRadio1'>
                                    Basic
                                </label>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-check form-check-inline'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='inlineRadioOptions'
                                    id='inlineRadio2'
                                    value='option2'
                                    onChange={radioChangeHandler}
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='inlineRadio2'>
                                    Premium
                                </label>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-check form-check-inline'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='inlineRadioOptions'
                                    id='inlineRadio3'
                                    value='option3'
                                    onChange={radioChangeHandler}
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='inlineRadio3'>
                                    Stellar
                                </label>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-check form-check-inline'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='inlineRadioOptions'
                                    id='inlineRadio4'
                                    value='option4'
                                    onChange={radioChangeHandler}
                                    defaultChecked
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='inlineRadio4'>
                                    None :(
                                </label>
                            </div>
                        </div>
                    </div>
                    {radioInputHasError && (
                        <p className='text-white'>You must select a plan</p>
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
