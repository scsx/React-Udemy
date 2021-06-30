import React from 'react'
import ReactDOM from 'react-dom'
import { CustomAuthContextProvider } from './store/auth-context'

import './index.css'
import App from './App'

ReactDOM.render(
    <CustomAuthContextProvider>
        <div><h1>iodwnvj</h1></div>
        <App />
    </CustomAuthContextProvider>,
    document.getElementById('root')
)
