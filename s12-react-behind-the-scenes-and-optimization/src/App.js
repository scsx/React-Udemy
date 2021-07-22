import React, { useState, useCallback } from 'react'
import './App.css'
import Button from './components/UI/Button/Button'
import Dummy from './components/dummy/Dummy'
import Notes from './components/notes-usecallback-test/Notes'

function App() {
    console.log('App component ran')
    const [showP, setShowP] = useState(false)
    const [allowToggle, setAllowToggle] = useState(false)

    const togglePHandler = useCallback(() => {
        if (allowToggle) {
            setShowP((prevShowP) => !prevShowP)
        }
    }, [allowToggle])

    const allowToggleHandler = () => {
        setAllowToggle(true)
    }

    return (
        <div className='app'>
            <h1>Hi there!</h1>
            {/* {showP && <p>This is a paragraph</p>} */}
            <Dummy show={showP} />
            <Button className='btn' onClick={allowToggleHandler}>
                Allow toggling
            </Button>
            <Button className='btn' onClick={togglePHandler}>
                Toggle paragraph
            </Button>
            <Notes />
        </div>
    )
}

export default App
