import './scss/App.scss'
import { useState } from 'react'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

import DUMMY_EXPENSES from './data/data'

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = (enteredExpenseData) => {
        setExpenses((prevExpenses) => {
            return [enteredExpenseData, ...prevExpenses]
        })
    }

    return (
        <div className='App'>
            <AppBar position='static' className='header bg-white'>
                <Toolbar>
                    <IconButton edge='start' className='hamburger'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h1' className='black'>
                        EXPENSE TRACKER
                    </Typography>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        className='text-grey'
                        href='https://github.com/academind/react-complete-guide-code/tree/05-rendering-lists-conditional-content'>
                        REPO
                    </a>
                </Toolbar>
            </AppBar>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Expenses items={expenses} />
                    </Grid>
                    <Grid item xs={4}>
                        <NewExpense onAddExpenseData={addExpenseHandler} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default App
