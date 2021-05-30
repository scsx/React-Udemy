import { useState } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import ExpenseDate from "./ExpenseDate"
import MaxCard from "../UI/MaxCard"

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('New title')
    }
    return (
        <MaxCard className='expense-item'>
            <Card>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <ExpenseDate date={props.date} />
                        </Grid>
                        <Grid item xs={4}>
                            <h3>{title}</h3>
                        </Grid>
                        <Grid item xs={3}>
                            {props.amount}
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                onClick={clickHandler}
                                className='bg-yellow'>
                                Change
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </MaxCard>
    )
}

export default ExpenseItem
