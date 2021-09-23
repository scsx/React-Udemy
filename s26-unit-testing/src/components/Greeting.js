import { useState } from "react"
import Output from "./Output"

const Greeting = () => {
    const [changedText, setChangedText] = useState(false)
    const changeTextHandler = () => {
        setChangedText(true)
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <p data-testid="p1">Unchanged</p>}
            {changedText && <p data-testid="p2">Changed</p>}
            <button onClick={changeTextHandler}>Change text!</button>
            {!changedText && <Output>children</Output>}
        </div>
    )
}

export default Greeting
