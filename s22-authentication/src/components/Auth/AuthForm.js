import { useState, useRef, useContext } from 'react'
import { ButtonGroup, Button, Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../store/auth-context'

const AuthForm = () => {
    const history = useHistory()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const authCtx = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value

        setIsLoading(true)
        let url
        if (isLogin) {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyApGk3la6kkUWVaKBhgBrEbtIDyEgEmOW0'
        } else {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApGk3la6kkUWVaKBhgBrEbtIDyEgEmOW0'
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                setIsLoading(false)
                if (res.ok) {
                    return res.json()
                } else {
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication failed!'
                        // if (data && data.error && data.error.message) {
                        //   errorMessage = data.error.message;
                        // }
                        throw new Error(errorMessage)
                    })
                }
            })
            .then((data) => {
                authCtx.login(data.idToken)
                history.replace('/')
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    return (
        <section className='box authlogin begg cgrey'>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className='control'>
                    <label htmlFor='email'>Your Email</label>
                    <input
                        type='email'
                        id='email'
                        ref={emailInputRef}
                        required
                    />
                </div>
                <div className='control'>
                    <label htmlFor='password'>
                        {isLogin ? 'Your Password' : 'Create Password'}
                    </label>
                    <input
                        type='password'
                        id='password'
                        ref={passwordInputRef}
                        required
                    />
                </div>
                <div className='actions'>
                    <ButtonGroup aria-label='Basic example'>
                        <Button variant='secondary' type='submit'>
                            {!isLoading && isLogin ? 'Login' : ''}
                            {!isLoading && !isLogin ? 'Create Account' : ''}
                            {isLoading && (
                                <>
                                    <Spinner animation='border' role='status'>
                                        <span className='visually-hidden'>
                                            Submitting...
                                        </span>
                                    </Spinner>
                                    <span>Submitting...</span>
                                </>
                            )}
                        </Button>

                        <Button
                            variant='outline-secondary'
                            onClick={switchAuthModeHandler}>
                            {isLogin ? 'Create account' : 'Login'}
                        </Button>
                    </ButtonGroup>
                </div>
            </form>
        </section>
    )
}

export default AuthForm
