import React from 'react'

import Navigation from './Navigation'
import classes from './MainHeader.module.css'

const MainHeader = (props) => {
    return (
        <header className={classes['main-header']}>
            <div className='container'>
                <h1>A Typical Page</h1>
                <Navigation
                    isLoggedIn={props.isAuthenticated}
                    onLogout={props.onLogout}
                />
            </div>
        </header>
    )
}

export default MainHeader
