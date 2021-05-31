import React, { useState } from 'react'

import Button from '../../UI/Button/Button'
import './CourseInput.css'

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('')

    const goalInputChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        props.onAddGoal(enteredValue)
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='form-control'>
                <label>COURSE GOAL</label>
                <input type='text' onChange={goalInputChangeHandler} value='test complete' />
            </div>
            <Button type='submit'>Add</Button>
        </form>
    )
}

export default CourseInput
