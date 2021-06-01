import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import './CourseInput.css'

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
            <div className={`form-control ${!isValid ? 'invalid' : 'valid'}`}>
                <label style={{ opacity: !isValid ? '0.5' : '1' }}>
                    COURSE GOAL
                </label>
                <input
                    type='text'
                    style={{
                        background: !isValid ? '#ffd8e8' : 'white',
                        borderColor: !isValid ? 'salmon' : '#ccc'
                    }}
                    onChange={goalInputChangeHandler}
                />
            </div>
            <Button type='submit'>Add</Button>
        </form>
    )
}

export default CourseInput
