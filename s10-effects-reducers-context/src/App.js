import React, { useState, useEffect, useContext } from 'react'

import AuthContext from './store/auth-context'
import Login from './components/Login/Login'
import LoginReducer from './components/Login/LoginReducer'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'

function App() {
    const ctx = useContext(AuthContext)

    return (
        <main className='container'>
            <MainHeader />
            {!ctx.isLoggedIn && (
                <div className='logins'>
                    <Login onLogin={ctx.loginHandler} />
                    <LoginReducer onLogin={ctx.loginHandler} />
                </div>
            )}
            {ctx.isLoggedIn && <Home onLogout={ctx.logoutHandler} />}
        </main>
    )
}

export default App
