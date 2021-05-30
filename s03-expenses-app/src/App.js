import './scss/App.scss'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14)
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12)
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28)
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12)
        }
    ]

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(enteredExpenseData)
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
                    <Button className='bg-yellow'>Expense tracker</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Expenses items={expenses} />
                    </Grid>
                    <Grid item xs={4}>
                        <NewExpense
                            onSavedExpenseData={saveExpenseDataHandler}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default App
