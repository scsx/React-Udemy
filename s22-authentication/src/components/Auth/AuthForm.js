import { useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import classes from './AuthForm.module.css'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState)
    }

    return (
        <section className='authlogin begg cgrey'>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required />
                </div>
                <div className={classes.actions}>
                    <ButtonGroup aria-label='Basic example'>
                        <Button variant='secondary'>
                            {isLogin ? 'Login' : 'Create Account'}
                        </Button>
                        <Button
                            variant='outline-secondary'
                            onClick={switchAuthModeHandler}>
                            {isLogin
                                ? 'Create account'
                                : 'Login with existing account'}
                        </Button>
                    </ButtonGroup>
                </div>
            </form>
        </section>
    )
}

export default AuthForm
