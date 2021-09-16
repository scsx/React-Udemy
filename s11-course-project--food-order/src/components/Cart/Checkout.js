import { useRef, useState } from 'react'

const isEmpty = (value) => value.trim() === ''
const isFiveChars = (value) => value.trim().length === 5

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    })

    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalCodeInputRef = useRef()
    const cityInputRef = useRef()

    const confirmHandler = (e) => {
        e.preventDefault()

        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostalCode = postalCodeInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode)
        const enteredCityIsValid = !isEmpty(enteredCity)

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalCodeIsValid,
            city: enteredCityIsValid
        })

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredPostalCodeIsValid &&
            enteredCityIsValid

        if (!formIsValid) {
            return
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
        })
    }

    return (
        <form className='detailsform' onSubmit={confirmHandler}>
            <h5>Personal details</h5>
            <div className='mb-1'>
                <label htmlFor='name' className='form-label'>
                    Your name
                </label>
                <input
                    type='text'
                    className=' form-control  form-control-sm'
                    id='name'
                    ref={nameInputRef}
                />
                {!formInputsValidity.name && (
                    <p className='invalid-feedback'>
                        Please provide a valid name.
                    </p>
                )}
            </div>
            <div className='mb-1'>
                <label htmlFor='street' className='form-label'>
                    Street
                </label>
                <input
                    type='text'
                    className=' form-control  form-control-sm'
                    id='street'
                    ref={streetInputRef}
                />
                {!formInputsValidity.street && (
                    <p className='invalid-feedback'>
                        Please provide a valid street.
                    </p>
                )}
            </div>
            <div className='row mb-1'>
                <div className='col'>
                    <label htmlFor='postal' className='form-label'>
                        Postal code
                    </label>
                    <input
                        type='text'
                        className=' form-control  form-control-sm'
                        id='postal'
                        ref={postalCodeInputRef}
                    />
                    {!formInputsValidity.name && (
                        <p className='invalid-feedback'>
                            Postal code is not 5 length.
                        </p>
                    )}
                </div>
                <div className='col'>
                    <label htmlFor='city' className='form-label'>
                        City
                    </label>
                    <input
                        type='text'
                        className=' form-control  form-control-sm'
                        id='city'
                        ref={cityInputRef}
                    />
                    {!formInputsValidity.name && (
                        <p className='invalid-feedback'>
                            Please provide a valid city.
                        </p>
                    )}
                </div>
            </div>
            <div className='mt-3'>
                <div className='btn-group btn-group-sm'>
                    <button type='submit' className='btn btn-success'>
                        Submit details
                    </button>
                    <button
                        type='button'
                        onClick={props.onCloseCart}
                        className='btn btn-outline-dark'>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Checkout
