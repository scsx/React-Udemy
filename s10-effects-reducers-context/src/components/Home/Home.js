import React, { useContext } from 'react'

import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'
import classes from './Home.module.css'
import AuthContext from '../../store/auth-context'

const Home = () => {
    const authCtx = useContext(AuthContext)

    return (
        <Card className={classes.home}>
            <p className='fs-1'>Welcome back!</p>
            <Button onClick={authCtx.onLogout}>Logout</Button>
        </Card>
    )
}

export default Home
