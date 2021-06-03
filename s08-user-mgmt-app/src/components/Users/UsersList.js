import { ListGroup } from 'react-bootstrap'
import CourseCard from '../UI/CourseCard'

const UsersList = (props) => {
    return (
        <CourseCard className='userlist'>
            <ListGroup>
                {props.users.map((user) => (
                    <ListGroup.Item key={user.id}>
                        {user.name} ({user.age} years old)
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </CourseCard>
    )
}

export default UsersList
