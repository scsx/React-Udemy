import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

const Lisbon = () => {
    const [lisbon, setLisbon] = useState({
        main: {
            temp: '',
            feels_like: '',
            temp_min: '',
            temp_max: ''
        },
        sys: {
            sunrise: 0,
            sunset: 0
        }
    })

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=${API_KEY}`
            )
            .then((res) => {
                setLisbon(res.data)
            })
    }, [])

    const getTimeFromDate = (timestamp) => {
        const pad = (num) => ('0' + num).slice(-2)
        const date = new Date(timestamp * 1000)
        let hours = date.getHours(),
            minutes = date.getMinutes()
        return pad(hours) + ':' + pad(minutes)
    }

    return (
        <Row className='lisbon'>
            <Col>
                NOW
                <b>{lisbon.main.temp}º</b>
            </Col>
            <Col>
                RealFeel
                <b>{lisbon.main.feels_like}º</b>
            </Col>
            <Col>
                MIN
                <b>{lisbon.main.temp_min}º</b>
            </Col>
            <Col>
                MAX
                <b>{lisbon.main.temp_max}º</b>
            </Col>
            <Col className='flex2 desktop'>
                SUN UP / DOWN
                <b>{getTimeFromDate(lisbon.sys.sunrise)} / {getTimeFromDate(lisbon.sys.sunset)}</b>
            </Col>
        </Row>
    )
}

export default Lisbon
