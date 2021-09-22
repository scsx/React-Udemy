import { useRef, useContext } from 'react'
import { Button } from 'react-bootstrap'
import AuthContext from '../../store/auth-context'
import { useHistory } from 'react-router-dom'

const ProfileForm = () => {
    const history = useHistory()
    const newPasswordRef = useRef()
    const authCtx = useContext(AuthContext)

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredNewPassword = newPasswordRef.current.value
        // validation possible

        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyApGk3la6kkUWVaKBhgBrEbtIDyEgEmOW0',
            {
                method: 'POST',
                body: JSON.stringify({
                    idToken: authCtx.token,
                    password: enteredNewPassword,
                    returnSecureToken: false
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            // Always OK; to see error mgmt see AuthForm.js
            history.replace('/')
        })
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className='control'>
                <label htmlFor='new-password'>New Password</label>
                <input type='password' id='new-password' minLength='7' ref={newPasswordRef} />
            </div>
            <div className='action'>
                <Button variant='secondary' className='mt-2' type='submit'>
                    Change Password
                </Button>
            </div>
        </form>
    )
}

export default ProfileForm
