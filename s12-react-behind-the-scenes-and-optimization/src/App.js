import React, { useState, useCallback, useMemo } from 'react'
import './App.css'
import Button from './components/UI/Button/Button'
import Dummy from './components/dummy/Dummy'
import Notes from './components/notes-usecallback-test/Notes'
import RefTest from './components/dummy/RefTest'
import UseMemoExample from './components/dummy/useMemoExample'

function App() {
    // useCallback stuff
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

    // useMemo stuff <UseMemoExampleb />
    const [listTitle, setListTitle] = useState('useMemo')
    const listItems = useMemo(() => [5, 3, 1, 10, 9], [])
    const changeTitleHandler = useCallback(() => {
        setListTitle('useMemo is working!')
    }, [])

    return (
        <div className='app'>
            <h1>Hi there!</h1>
            <Dummy show={showP} />
            <Button className='btn' onClick={allowToggleHandler}>
                Allow toggling
            </Button>
            <Button className='btn' onClick={togglePHandler}>
                Toggle paragraph
            </Button>
            <Notes />
            <RefTest />
            <UseMemoExample title={listTitle} items={listItems} />
            <Button onClick={changeTitleHandler}>Re-render cpt but numbers won't be sorted again</Button>
        </div>
    )
}

export default App
