import { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const NewExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
            id: Math.random().toString(36).substring(7)
        }
        props.onAddExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        setIsEditing(false)
    }

    const startIsEditing = () => {
        setIsEditing(true)
    }

    const stopIsEditing = () => {
        setIsEditing(false)
    }

    return (
        <Card>
            <CardContent>
                {!isEditing && (
                    <Button
                        className='bg-yellow'
                        size='large'
                        onClick={startIsEditing}>
                        Add new expense
                    </Button>
                )}
                {isEditing && (
                    <form className='new-expense' onSubmit={submitHandler}>
                        <div className='new-expense__group'>
                            <div className='new-expense__control'>
                                <label>Title</label>
                                <input
                                    type='text'
                                    value={enteredTitle}
                                    onChange={titleChangeHandler}
                                />
                            </div>
                            <div className='new-expense__control'>
                                <label>Amount</label>
                                <input
                                    type='number'
                                    value={enteredAmount}
                                    onChange={amountChangeHandler}
                                    min='0.0'
                                    step='1'
                                />
                            </div>
                            <div className='new-expense__control'>
                                <label>Date</label>
                                <input
                                    type='date'
                                    value={enteredDate}
                                    onChange={dateChangeHandler}
                                    min='2019-01-01'
                                    max='2022-12-31'
                                />
                            </div>
                        </div>
                        <div className='alright'>
                            <ButtonGroup>
                                <Button
                                    className='bg-grey text-white'
                                    onClick={stopIsEditing}
                                    size='large'>
                                    Cancel
                                </Button>
                                <Button
                                    className='bg-yellow'
                                    type='submit'
                                    size='large'>
                                    Add expense
                                </Button>
                            </ButtonGroup>
                        </div>
                    </form>
                )}
            </CardContent>
        </Card>
    )
}

export default NewExpense
