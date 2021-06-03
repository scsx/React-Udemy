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
import Lisbon from './RandomUsers/Lisbon'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'
import DUMMY_USERS from './mock-data/CourseUsers'

const App = () => {
    // isMounted to prevent the error: Warning: Can't perform a React state update on an unmounted component.
    let isMounted = true
    const [people, setPeople] = useState([])
    const [usersList, setUsersList] = useState(DUMMY_USERS)

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=5').then((res) => {
            if (isMounted) setPeople(res.data.results)
        })
        return () => {
            isMounted = false
        }
    }, [])

    const refreshPage = () => {
        axios.get('https://randomuser.me/api/?results=5').then((res) => {
            if (isMounted) setPeople(res.data.results)
        })
    }

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: uName, age: uAge, id: Math.random().toString() }
            ]
        })
        console.log(usersList)
    }

    return (
        <Container fluid>
            <Row className='maingrid'>
                <Col xs={3} className='console'>
                    <h2 className='blue'>UsersProj</h2>
                    <h3>New user</h3>
                    <AddUser onAddUser={addUserHandler} />
                </Col>
                <Col className='users'>
                    <Row className='title'>
                        <Col>
                            <h2 className='grey'>User List</h2>
                        </Col>
                        <Col className='flex2'>
                            <Lisbon />
                        </Col>
                    </Row>
                    <div className='usergrid'>
                        <div className='usercol exercise'>
                            <h3>Common users</h3>
                            <UsersList users={usersList} />
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
                                                        {user.name.title}
                                                    </small>
                                                </h5>
                                                <p>{`${user.dob.age} years`}</p>
                                                <p>{user.location.country}</p>
                                            </ListGroup.Item>
                                        </OverlayTrigger>
                                    )
                                })}
                            </ListGroup>
                            <Button
                                className='mt-4'
                                variant='outline-primary'
                                onClick={refreshPage}>
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
