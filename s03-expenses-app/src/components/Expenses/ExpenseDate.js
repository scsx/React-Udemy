import Chip from "@material-ui/core/Chip"

const ExpenseDate = (propsOrAnyName) => {
    const month = propsOrAnyName.date.toLocaleString("en-US", {
        month: "long",
    })
    const day = propsOrAnyName.date.toLocaleString("en-US", {
        day: "2-digit",
    })
    const year = propsOrAnyName.date.getFullYear()

    return <Chip label={day + "/" + month + "/" + year} variant='outlined' />
}

export default ExpenseDate
