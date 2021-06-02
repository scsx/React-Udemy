import { Row, Col, Table } from 'react-bootstrap'

const WeatherWidget = (props) => {
    const intTemp = (temp) => {
        let decimal = (temp - Math.floor(temp)).toString()
        decimal = decimal.slice(1, 3)
        return (
            <span>
                {Math.round(temp)}
                <small>{decimal}º</small>
            </span>
        )
    }

    return (
        <div className='weatherCard'>
            <Row>
                <Col xs={8} className='currentTemp alcenter'>
                    <h5>
                        <img
                            alt={props.location.weather[0].main}
                            src={`http://openweathermap.org/img/w/${props.location.weather[0].icon}.png`}
                        />
                        {intTemp(props.location.main.temp)}
                    </h5>
                    <p>
                        <b>{props.location.weather[0].main}</b>
                    </p>
                    <p>{props.location.weather[0].description}</p>
                </Col>
                <Col xs={4} className='minmax'>
                    <Table>
                        <tbody>
                            <tr>
                                <td>&#8595;</td>
                                <td className='alright'>
                                    {intTemp(props.location.main.temp_min)}
                                </td>
                            </tr>
                            <tr>
                                <td>&#8593;</td>
                                <td className='alright'>
                                    {intTemp(props.location.main.temp_max)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <small>Feels</small>
                                </td>
                                <td className='alright'>
                                    {intTemp(props.location.main.feels_like)}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className='info'>
                <Col xs={2}>Wind</Col>
                <Col>&#8599; {props.location.wind.deg}º</Col>
                <Col>{props.location.wind.speed} km/h</Col>
                <Col>&#8621; {props.location.wind.gust} km/h</Col>
            </Row>
        </div>
    )
}

export default WeatherWidget
