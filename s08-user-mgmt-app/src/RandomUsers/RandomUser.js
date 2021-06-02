import { useState, useEffect } from 'react'
import { Popover, Button } from 'react-bootstrap'
import axios from 'axios'

const RandomUser = (props) => {
    const [weather, setWeather] = useState({})
    const user = props.userObj

                console.log(user.location.coordinates.latitude)
    useEffect(() => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${user.location.coordinates.latitude},${user.location.coordinates.longitude}`)
            .then((res) => {
                console.log(res)
            })
            .catch(function (error) {
                console.log(error)
            })
            .then(function () {
                console.log('done')
            })
    }, [])

    return (
        <div className='randomuser'>
            {/* <Popover.Title as='h3'>{`${user.name.first} ${user.name.last}`}</Popover.Title> */}
            <Popover.Content
                className='diubgvfbfn'
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
                {/* {JSON.stringify(user)} */}
            </Popover.Content>
        </div>
    )
}

export default RandomUser
