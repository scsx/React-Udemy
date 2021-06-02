import { useState, useEffect } from 'react'
import {
    Container,
    Row,
    Col,
    Popover,
    OverlayTrigger,
    ListGroup,
    Button
} from 'react-bootstrap'
import axios from 'axios'
import RandomUser from './RandomUsers/RandomUser'

function App() {
    const [people, setPeople] = useState([])
    const [isbon, setLisbon] = useState({})

    useEffect(() => {
        const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
        axios.get('https://randomuser.me/api/?results=5').then((res) => {
            setPeople(res.data.results)
        })
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=${API_KEY}`).then((res) => {
            setLisbon(res.data)
            console.log(res)
        })
    }, [])

    function refreshPage() {
        axios.get('https://randomuser.me/api/?results=5').then((res) => {
            setPeople(res.data.results)
        })
    }

    return (
        <Container fluid>
            <Row className='maingrid'>
                <Col xs={3} className='console'>
                    <h2 className='blue'>New user</h2>
                </Col>
                <Col className='users'>
                    <h2 className='grey'>User List</h2>
                    <div className='usergrid'>
                        <div className='usercol exercise'>
                            <h3>Common users</h3>
                        </div>
                        <div className='usercol practice'>
                            <h3>VIP</h3>
                            <ListGroup>
                                {people.map((user, key) => {
                                    return (
                                        <OverlayTrigger
                                            key={key}
                                            trigger={['focus', 'hover']}
                                            placement='left'
                                            overlay={
                                                <Popover>
                                                    <RandomUser
                                                        userObj={user}
                                                    />
                                                </Popover>
                                            }>
                                            <ListGroup.Item>
                                                <h5>
                                                    {`${user.name.first} ${user.name.last}`}
                                                    <small>
                                                        {user.id.name}
                                                    </small>
                                                </h5>
                                                <p>{`${user.dob.age} years`}</p>
                                                <p>{user.location.country}</p>
                                            </ListGroup.Item>
                                        </OverlayTrigger>
                                    )
                                })}
                            </ListGroup>
                            <Button className='mt-4' onClick={refreshPage}>
                                Get new users
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default App
