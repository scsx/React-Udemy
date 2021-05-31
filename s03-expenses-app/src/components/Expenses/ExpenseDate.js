const ExpenseDate = (propsOrAnyName) => {
    const month = propsOrAnyName.date.toLocaleString("en-US", {
        month: "long",
    })
    const day = propsOrAnyName.date.toLocaleString("en-US", {
        day: "2-digit",
    })
    const year = propsOrAnyName.date.getFullYear()

    return (
        <div className="date">
            <h4>{day}</h4>
            <h5>{month}</h5>
            <p>{year}</p>
        </div>
    )
}

export default ExpenseDate
