import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
    return (
        <div className='chart'>
            {props.dataPoints.map((point) => {
                return (
                    <ChartBar
                        key={point.label}
                        value={point.value}
                        maxValue={totalMaximum}
                        label={point.label}
                    />
                )
            })}
        </div>
    )
}

export default Chart
