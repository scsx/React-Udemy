import React, { useState, useEffect, useCallback } from 'react'

let logoutTimer

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
})

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime()
    const adjExpirationTime = new Date(expirationTime).getTime()

    const remainingDuration = adjExpirationTime - currentTime

    return remainingDuration
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('tokenKey')
    const storedExpirationDate = localStorage.getItem('expirationTimeKey')

    const remainingTime = calculateRemainingTime(storedExpirationDate)
    if (remainingTime <= 60000) {
        localStorage.removeItem('tokenKey')
        localStorage.removeItem('expirationTimeKey')
        return null
    }

    return {
        token: storedToken,
        duration: remainingTime
    }
}

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken()
    let initialToken
    if (tokenData) {
        initialToken = tokenData.token
    }
    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token

    const loginHandler = (token, expirationTime) => {
        setToken(token)
        localStorage.setItem('tokenKey', token)
        localStorage.setItem('expirationTimeKey', expirationTime)

        const remainingTime = calculateRemainingTime(expirationTime)
        // Auto logout
        logoutTimer = setTimeout(logoutHandler, remainingTime)
        // Test auto logout after 3s (it works)
        //setTimeout(logoutHandler, 3000)
    }
    const logoutHandler = useCallback(() => {
        setToken(null)
        localStorage.removeItem('tokenKey')
        localStorage.removeItem('expirationTimeKey')

        if (logoutTimer) {
            clearTimeout(logoutTimer)
        }
    }, [])

    useEffect(() => {
        if (tokenData) {
            logoutTimer = setTimeout(logoutHandler, tokenData.duration)
        }
    }, [tokenData, logoutHandler])

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
