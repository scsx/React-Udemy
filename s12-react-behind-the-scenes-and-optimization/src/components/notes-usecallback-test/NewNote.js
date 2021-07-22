import React from 'react'
// Let’s import our Button component and pass our addNote function as a prop and try to add a note. We can see that we can add a note successfully, but also our Button component re-renders every time, and it shouldn’t. The only thing that’s changing in our app is the notes state, not the Button.
// See Notes.js how to fix with useCallback()
const NewNote = React.memo((props) => {
    console.log('NOTES: Button re-rendered')
    return (
        <div>
            <button onClick={props.newnote}>Add</button>
        </div>
    )
})

export default NewNote
