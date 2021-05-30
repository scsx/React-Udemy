import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const NewExpense = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: new Date(event.target.value)
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.onSavedExpenseData(userInput)

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    }

    return (
        <Card>
            <CardContent>
                <form className='new-expense' onSubmit={submitHandler}>
                    <div className='new-expense__group'>
                        <div className='new-expense__control'>
                            <label>Title</label>
                            <input
                                type='text'
                                value={userInput.enteredTitle}
                                onChange={titleChangeHandler}
                            />
                        </div>
                        <div className='new-expense__control'>
                            <label>Amount</label>
                            <input
                                type='number'
                                value={userInput.enteredAmount}
                                onChange={amountChangeHandler}
                                min='0.0'
                                step='1'
                            />
                        </div>
                        <div className='new-expense__control'>
                            <label>Date</label>
                            <input
                                type='date'
                                value={userInput.enteredDate}
                                onChange={dateChangeHandler}
                                min='2019-01-01'
                                max='2022-12-31'
                            />
                        </div>
                    </div>
                    <Button className='bg-yellow' type='submit'>
                        Add Expense
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default NewExpense
