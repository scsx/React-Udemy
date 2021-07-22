// https://www.telerik.com/blogs/usecallback-useref-two-react-hooks-you-should-learn
import React, { useState, useCallback } from 'react'
import NewNote from './NewNote'

const Notes = () => {
    const [notes, setNotes] = useState([])
    const addNote = useCallback(() => {
        console.log('NOTES: Note added ')
        const newNote = 'random'
        setNotes((n) => [...n, newNote])
    }, [setNotes])

    return (
        <div className='notes'>
            <h3>Notes</h3>
            {notes.map((note, index) => (
                <p key={index}>{note}</p>
            ))}

            <NewNote newnote={addNote} />
        </div>
    )
}

export default Notes
