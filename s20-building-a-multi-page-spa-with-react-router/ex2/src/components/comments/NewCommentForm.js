import { useRef } from 'react'

import classes from './NewCommentForm.module.css'

const NewCommentForm = (props) => {
    const commentTextRef = useRef()

    const submitFormHandler = (event) => {
        event.preventDefault()
        // optional: Could validate here

        // send comment to server
    }

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label className='cinzel mt-4' htmlFor='comment'>
                    Your Comment
                </label>
                <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className='btn btn-info mt-2'>Add Comment</button>
            </div>
        </form>
    )
}

export default NewCommentForm
