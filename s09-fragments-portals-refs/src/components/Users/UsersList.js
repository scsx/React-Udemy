import React from 'react'

import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {

    return (
        <Card className={classes.listgroup}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} <small>({user.age} years old)</small>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList
