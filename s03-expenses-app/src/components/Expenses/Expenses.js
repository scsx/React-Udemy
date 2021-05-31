import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import MaxCard from '../UI/MaxCard'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (chosenYear) => {
        setFilteredYear(chosenYear)
    }

    return (
        <MaxCard className='expenses'>
            <ExpenseFilter
                selectedYear={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {props.items.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount} />
                )
            })}
        </MaxCard>
    )
}
export default Expenses
