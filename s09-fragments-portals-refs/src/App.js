import React, { useState } from 'react'

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
    const [usersList, setUsersList] = useState([
        // prettier-ignore
        { id: 'e35641', name: 'Lauri Heikkinen', age: 54},
        { id: 'e35941', name: 'Florent Rodriguez', age: 18 },
        { id: '35y3h5', name: 'Leon Mason', age: 38 },
        { id: '4nf4h5', name: 'Rita Clarke', age: 25 },
        { id: '5y35yh', name: 'Tom Espinoza', age: 54 }
    ])

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: uName, age: uAge, id: Math.random().toString() }
            ]
        })
    }

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <AddUser onAddUser={addUserHandler} />
                    </div>
                    <div className='col'>
                        <UsersList users={usersList} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App
