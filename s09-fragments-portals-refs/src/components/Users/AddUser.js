import React, { useState, useRef } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../helpers/Wrapper'
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value

        event.preventDefault()
        if (
            enteredName.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return
        }
        props.onAddUser(enteredName, enteredAge)
        nameInputRef.current.value = '' // This should not be done but it's porssible
        ageInputRef.current.value = ''
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        ref={nameInputRef}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age'
                        type='number'
                        ref={ageInputRef}
                    />
                    <div className='mt-3'>
                        <Button type='submit'>Add User</Button>
                    </div>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser
