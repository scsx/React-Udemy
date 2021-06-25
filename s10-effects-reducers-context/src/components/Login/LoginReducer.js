import React, { useState, useEffect, useReducer } from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: action.val.includes('@') }
    }
    return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: action.val.trim().length > 6 }
    }
    return { value: '', isValid: false }
}

const LoginReducer = (props) => {
    //const [enteredEmail, setEnteredEmail] = useState('')
    //const [emailIsValid, setEmailIsValid] = useState()
    // const [enteredPassword, setEnteredPassword] = useState('')
    // const [passwordIsValid, setPasswordIsValid] = useState()
    const [formIsValid, setFormIsValid] = useState(false)

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: false
    })

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: false
    })

    // Object destructuring
    const { isValid: emailIsValid} = emailState
    const { isValid: passwordIsValid} = passwordState

   useEffect(() => {
        // Using debouncing (Javascript technique, not React)
        const myTimer = setTimeout(() => {
            setFormIsValid(
                emailIsValid && passwordIsValid
            )
        }, 500)

        return () => {
            clearTimeout(myTimer)
        }
    }, [emailIsValid, passwordIsValid])

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
/*
        setFormIsValid(
            event.target.value.includes('@') && passwordState.isValid
        )
        */
    }

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value })
/*
        setFormIsValid(
            emailState.isValid.length > 6 && emailState.value.includes('@')
        )
        */
    }

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' })
    }

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.onLogin(emailState.value, passwordState.value)
    }

    return (
        <Card className={'card ' + classes.login}>
            <h3>Login with useReducer</h3>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ''
                    }`}>
                    <label htmlFor='email'>E-Mail</label>
                    <input
                        type='email'
                        id='email'
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ''
                    }`}>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type='submit'
                        className={classes.btn}
                        disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default LoginReducer
