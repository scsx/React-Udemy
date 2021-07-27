import { useState, useEffect } from 'react'

const useCounter = (direction = true) => { // simple parameter with default value, to make it optional
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (direction) {
                setCounter((prevCounter) => prevCounter + 1)
            } else {
                setCounter((prevCounter) => prevCounter - 1)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [direction])

    return counter // This is what's going to update the state in the component
}

export default useCounter
