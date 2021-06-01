import { useState } from 'react'
import styled from 'styled-components'

import Button from '../../UI/Button/Button'
import './CourseInput.css'

const someVal = '0.5rem'
const FormControl = styled.div`
    margin: ${someVal} 0;

    & label {
        font-weight: bold;
        background: linear-gradient(to right, #7927b2, #fb3182);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: block;
        margin-bottom: 0.5rem;
    }

    & input {
        display: block;
        width: 300px;
        margin: 1.5rem auto 1rem auto;
        border: 2px solid #ccc;
        border-radius: 2rem;
        font-size: 1.2rem;
        line-height: 1.5rem;
        padding: 0.5rem 0.75rem;
        text-align: center;
        box-shadow: ${props => props.invalidProp ? '0 2px 8px rgb(0 0 0 / 25%)' : 'none'};
    }

    & input:focus {
        outline: none;
        border-color: #7927b2;
    }
`

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
            <FormControl
                className={`form-control ${!isValid ? 'invalid' : 'valid'}`}
                invalidProp={!isValid}>
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
            </FormControl>
            <Button type='submit'>Add</Button>
        </form>
    )
}

export default CourseInput
