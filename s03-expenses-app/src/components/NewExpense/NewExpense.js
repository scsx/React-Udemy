import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const NewExpense = (props) => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                date: new Date(event.target.value)
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.onAddExpenseData(userInput)
        setUserInput({
            title: '',
            amount: '',
            date: ''
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
                                value={userInput.title}
                                onChange={titleChangeHandler}
                            />
                        </div>
                        <div className='new-expense__control'>
                            <label>Amount</label>
                            <input
                                type='number'
                                value={userInput.amount}
                                onChange={amountChangeHandler}
                                min='0.0'
                                step='1'
                            />
                        </div>
                        <div className='new-expense__control'>
                            <label>Date</label>
                            <input
                                type='date'
                                value={userInput.date}
                                onChange={dateChangeHandler}
                                min='2019-01-01'
                                max='2022-12-31'
                            />
                        </div>
                    </div>
                    <div className='alright'>
                        <Button
                            className='bg-yellow'
                            type='submit'
                            size='large'>
                            Add Expense
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default NewExpense
