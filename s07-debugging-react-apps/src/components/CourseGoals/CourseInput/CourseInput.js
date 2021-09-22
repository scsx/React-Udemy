import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import styles from './CourseInput.module.css'

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isValid, setIsValid] = useState(true)

    const goalInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredValue(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        if (enteredValue.trim().length === 0) {
            setIsValid(false)
            return
        }
        props.onAddGoal(enteredValue)
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div
                className={`${styles['formcontrol']} ${
                    !isValid && styles.invalid
                }`}>
                <label>Course Goal</label>
                <input type='text' className='form-control mb-3' onChange={goalInputChangeHandler} />
            </div>
            <Button type='submit'>Add Goal</Button>
        </form>
    )
}

export default CourseInput
