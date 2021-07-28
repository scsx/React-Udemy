import { useState } from 'react'

// TODO: eliminate defaultValue
const useInput = (validationFunction, defaultValue = '') => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    let valueIsValid
    if (defaultValue && defaultValue !== '') {
        valueIsValid = validationFunction(defaultValue)
        console.log(valueIsValid)
    } else {
        validationFunction(enteredValue)
    }
    const hasError = !valueIsValid && isTouched
    console.log(hasError)

    // onChange function
    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    // onBlur function
    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    // Reset function
    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    // Return change and blur functions so they can be used in the cpt
    return {
        value: enteredValue,
        isValid: valueIsValid,
        // Next properties use shorthand (key=value)
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput
