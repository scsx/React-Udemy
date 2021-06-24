import React, { useState, useEffect } from 'react'

import Login from './components/Login/Login'
import LoginReducer from './components/Login/LoginReducer'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedUserLogInfo = localStorage.getItem('isLoggedIn')
        if (storedUserLogInfo === 'LOGGED_IN') {
            setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', 'LOGGED_IN')
        setIsLoggedIn(true)
    }

    const logoutHandler = () => {
        setIsLoggedIn(false)
        localStorage.setItem('isLoggedIn', 'LOGGED_OUT')
    }

    return (
        <React.Fragment>
            <main className='container'>
                <MainHeader
                    isAuthenticated={isLoggedIn}
                    onLogout={logoutHandler}
                />
                {!isLoggedIn && (
                    <div className='row'>
                        <div className='col'>
                            <Login onLogin={loginHandler} />
                        </div>

                        <div className='col'>
                            <LoginReducer onLogin={loginHandler} />
                        </div>
                    </div>
                )}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </React.Fragment>
    )
}

export default App
