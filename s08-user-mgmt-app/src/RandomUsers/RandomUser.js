import { useState, useEffect } from 'react'
import { Popover, Button } from 'react-bootstrap'
import axios from 'axios'
import WeatherWidget from './WeatherWidget'

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
            temp_max: '',
            feels_like: ''
        },
        wind: {
            deg: 73,
            gust: 0.94,
            speed: 0.99
        }
    })
    const user = props.userObj

    useEffect(() => {
        // isMounted to prevent the error: Warning: Can't perform a React state update on an unmounted component.
        let isMounted = true
        const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${user.location.coordinates.latitude}&lon=${user.location.coordinates.longitude}&units=metric&appid=${API_KEY}`
            )
            .then((res) => {
                if (isMounted) {
                    setInfo(res.data)
                    setLoading(false)
                }
            })

        return () => {
            isMounted = false
        }
    }, [
        user.location.coordinates.latitude,
        user.location.coordinates.longitude
    ])

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
                    <p>
                        <span>{`${user.location.street.number}, ${user.location.street.name}`}</span>
                    </p>
                    <p>
                        <span>{user.location.city}</span>
                    </p>
                    <p>
                        <span>{user.location.country}</span>
                    </p>
                </div>
            </Popover.Content>
            {loading ? (
                <div className='loading'>Loading</div>
            ) : (
                <WeatherWidget location={info} />
            )}
        </div>
    )
}

export default RandomUser
