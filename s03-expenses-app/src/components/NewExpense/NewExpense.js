import { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const NewExpense = (props) => {
    console.log(props.DELETEAFTER)
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
        id: Math.random().toString(36).substring(7)
    })
    const [isEditing, setIsEditing] = useState(false)

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        })
    }

    const startIsEditing = () => {
        setIsEditing(true)
    }

    const stopIsEditing = () => {
        setIsEditing(false)
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
        })
    }

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear()

        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day

        return [year, month, day].join('-')
    }

    const dateChangeHandler = (event) => {
        console.log("original: " + new Date(event.target.value))
        
        // const formattedDate = formatDate(event.target.value)
        let formattedDate = new Date(event.target.value).toLocaleDateString('en-US')
        formattedDate = formatDate(formattedDate)
        console.log("fornatted: " + formattedDate)
        setUserInput((prevState) => {
            return {
                ...prevState,
                date: formattedDate
            }
        })
        
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.onAddExpenseData(userInput)
        setUserInput({
            title: '',
            amount: '',
            date: '',
            id: ''
        })
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
