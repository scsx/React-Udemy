import { useState, useEffect } from 'react'
import { Popover, Button } from 'react-bootstrap'
import axios from 'axios'

const RandomUser = (props) => {
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState({
        weather: [
            {
                main: '',
                description: '',
                icon: ''
            }
        ],
        main: {
            temp: '',
            temp_min: '',
            temp_max: ''
        }
    })
    const user = props.userObj
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${user.location.coordinates.latitude}&lon=${user.location.coordinates.longitude}&units=metric&appid=${API_KEY}`
            )
            .then((res) => {
                setInfo(res.data)
                setLoading(false)
            })
    }, [])

    return (
        <div className='randomuser'>
            <Popover.Content
                style={{
                    backgroundImage: `url(${user.picture.large})`
                }}>
                <div className='gradient'>
                    <h4>{`${user.name.first} ${user.name.last}`}</h4>
                </div>
                <div className='details'>
                    <Button variant='primary' size='sm'>
                        {user.email}
                    </Button>
                    <p>{`${user.location.street.number}, ${user.location.street.name}`}</p>
                    <p>{user.location.city}</p>
                    <p>{user.location.country}</p>
                </div>
                {loading ? (
                    'loading'
                ) : (
                    <div className='weather'>
                        <div className='weatherCard'>
                            <div className='currentTemp'>
                                <span className='temp'>{info.main.temp}º</span>
                                <span className='location'>Brussels</span>
                            </div>
                            <div className='currentWeather'>
                                <span className='conditions'>
                                    <img src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`} />
                                </span>
                                <div className='info'>
                                    <span className='rain'>{info.main.temp_min}</span>
                                    <span className='wind'>10 MPH</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Popover.Content>
        </div>
    )
}

export default RandomUser
