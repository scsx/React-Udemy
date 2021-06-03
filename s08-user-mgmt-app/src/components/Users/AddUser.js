import { useState } from 'react'
import { Form } from 'react-bootstrap'
import CourseCard from '../UI/CourseCard'
import CourseButton from '../UI/CourseButton'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age.'
            })
            return
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age > 0.'
            })
            return
        }

        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const dismissErrorHandler = () => {
        setError(null)
    }

    return (
        <CourseCard className='classFromParent'>
            <div className='adduser'>

                {error && <ErrorModal title={error.title} message={error.message} onConfirm={dismissErrorHandler} />}
                
                <Form className='newuserform' onSubmit={addUserHandler}>
                    <Form.Group>
                        <Form.Label htmlFor='userinput'>Username</Form.Label>
                        <Form.Control
                            type='text'
                            id='userinput'
                            placeholder='Enter name'
                            onChange={usernameChangeHandler}
                            value={enteredUsername}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='age'>Age</Form.Label>
                        <Form.Control
                            type='number'
                            id='age'
                            placeholder='Enter age'
                            onChange={ageChangeHandler}
                            value={enteredAge}
                        />
                        <Form.Text className='text-muted'>In years</Form.Text>
                    </Form.Group>
                    <CourseButton
                        className='btn-success'
                        onClick={addUserHandler}
                        type='submit'>
                        Add user
                    </CourseButton>
                </Form>
            </div>
        </CourseCard>
    )
}

export default AddUser
