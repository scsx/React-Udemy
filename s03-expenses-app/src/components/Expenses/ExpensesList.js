import Chip from '@material-ui/core/Chip'
import CloudOffIcon from '@material-ui/icons/CloudOff'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return (
            // return and exit right away with this jsx only
            <div className='alcenter'>
                <Chip
                    className='empty'
                    icon={<CloudOffIcon />}
                    label='No expenses found'
                    color='secondary'
                />
            </div>
        )
    }

    return (
        <div>
            {props.items.map((expense) => {
                return <ExpenseItem
                    idKey={expense.id}
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            })}
        </div>
    )
}

export default ExpensesList
