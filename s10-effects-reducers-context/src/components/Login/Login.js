import React, { useState, useEffect, useContext, useRef } from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import AuthContext from '../../store/auth-context'

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [emailIsValid, setEmailIsValid] = useState()
    const [enteredPassword, setEnteredPassword] = useState('')
    const [passwordIsValid, setPasswordIsValid] = useState()
    const [formIsValid, setFormIsValid] = useState(false)

    const authCtx = useContext(AuthContext)
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    useEffect(() => {
        // Using debouncing (Javascript technique, not React)
        const myTimer = setTimeout(() => {
            setFormIsValid(
                enteredEmail.includes('@') && enteredPassword.trim().length > 6
            )
        }, 500)

        return () => {
            clearTimeout(myTimer)
        }
    }, [enteredEmail, enteredPassword])

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value)

        setFormIsValid(
            event.target.value.trim().length > 6 && enteredEmail.includes('@')
        )
    }

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'))
    }

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (formIsValid) {
            authCtx.onLogin(enteredEmail, enteredPassword)
        } else if (!emailIsValid) {
            emailInputRef.current.externallyAvailableMethod()
        } else {
            // than password is not valid
            passwordInputRef.current.externallyAvailableMethod()
        }
    }

    return (
        <Card className={'card ' + classes.login}>
            <h3>Login with useEffect only</h3>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id='email'
                    label='E-Mail'
                    type='email'
                    isValid={emailIsValid}
                    value={enteredEmail.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <Input
                    ref={passwordInputRef}
                    id='password'
                    label='Password'
                    type='password'
                    isValid={passwordIsValid}
                    value={enteredPassword.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button type='submit' className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default Login
