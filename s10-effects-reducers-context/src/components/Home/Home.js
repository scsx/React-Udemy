import React from 'react'

import Card from '../UI/Card/Card'
import classes from './Home.module.css'

const Home = (props) => {
    return (
        <Card className={classes.home}>
            <p className="fs-1">Welcome back!</p>
        </Card>
    )
}

export default Home
