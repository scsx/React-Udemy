import React from 'react'

import Navigation from './Navigation'
import classes from './MainHeader.module.css'

const MainHeader = () => {
    return (
        <header className={classes['main-header']}>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1>A Typical Page</h1>
                    </div>
                    <div className='col text-end'>
                        <Navigation />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader
