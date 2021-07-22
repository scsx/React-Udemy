import React, { useRef } from 'react'
const RefTest = () => {
    const inputRef = useRef()
    const textareaRef = useRef()
    const focusSomething = (el) => {
        el.current.focus()
    }
    return (
        <div>
            <h3>useRef test</h3>
            <div>
                <input type='text' ref={inputRef} />
                <button onClick={() => focusSomething(inputRef)}>Focus</button>
            </div>
            <div>
                <textarea ref={textareaRef}></textarea>
                <button onClick={() => focusSomething(textareaRef)}>
                    Focus
                </button>
            </div>
        </div>
    )
}

export default RefTest
