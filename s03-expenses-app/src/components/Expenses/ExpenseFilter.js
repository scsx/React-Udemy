import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const ExpenseFilter = (props) => {
    const selectChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return (
        <Card className='expfilter'>
            <CardContent>
                <div className='expfilter__control'>
                    <label id='demo-simple-select-label'>Filter by year</label>
                    <select
                        value={props.selectedYear}
                        className='form-select'
                        onChange={selectChangeHandler}>
                        <option value={2022}>2022</option>
                        <option value={2021}>2021</option>
                        <option value={2020}>2020</option>
                        <option value={2019}>2019</option>
                    </select>
                </div>
            </CardContent>
        </Card>
    )
}

export default ExpenseFilter
