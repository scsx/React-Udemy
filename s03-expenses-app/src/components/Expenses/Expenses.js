import { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from '../Expenses/ExpensesChart'
import MaxCard from '../UI/MaxCard'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (chosenYear) => {
        setFilteredYear(chosenYear)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <MaxCard className='expenses'>
            <Card className='expfilter'>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <ExpenseFilter
                                selectedYear={filteredYear}
                                onChangeFilter={filterChangeHandler}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <ExpensesChart expenses={filteredExpenses} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <ExpensesList items={filteredExpenses} />
        </MaxCard>
    )
}
export default Expenses
