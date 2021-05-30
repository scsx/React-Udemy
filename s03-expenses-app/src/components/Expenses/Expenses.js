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
            <ExpenseItem
                date={props.items[0].date}
                title={props.items[0].title}
                amount={props.items[0].amount}></ExpenseItem>
            <ExpenseItem
                date={props.items[1].date}
                title={props.items[1].title}
                amount={props.items[1].amount}></ExpenseItem>
            <ExpenseItem
                date={props.items[2].date}
                title={props.items[2].title}
                amount={props.items[2].amount}></ExpenseItem>
            <ExpenseItem
                date={props.items[3].date}
                title={props.items[3].title}
                amount={props.items[3].amount}></ExpenseItem>
        </MaxCard>
    )
}
export default Expenses
