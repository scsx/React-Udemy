import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ExpenseDate from './ExpenseDate'
import MaxCard from '../UI/MaxCard'

const ExpenseItem = (props) => {
    return (
        <MaxCard className='expense-item' id={props.idKey}>
            <Card>
                <CardContent>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <ExpenseDate date={props.date} />
                                </td>
                                <td>
                                    <h3>{props.title}</h3>
                                </td>
                                <td>{props.amount}</td>
                            </tr>
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </MaxCard>
    )
}

export default ExpenseItem
