import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
})

export const CustomAuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedUserLogInfo = localStorage.getItem('isLoggedIn')
        if (storedUserLogInfo === 'LOGGED_IN') {
            setIsLoggedIn(true)
            document.body.classList.add('loggedin')
        }
    }, [])

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', 'LOGGED_IN')
        setIsLoggedIn(true)
        document.body.classList.toggle('loggedin')
    }

    const logoutHandler = () => {
        setIsLoggedIn(false)
        localStorage.setItem('isLoggedIn', 'LOGGED_OUT')
        document.body.classList.toggle('loggedin')
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
