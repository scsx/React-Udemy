import { useRef, useEffect } from 'react'
import classes from './NewCommentForm.module.css'
import useHttp from '../../hooks/use-http'
import { addComment } from '../../lib/api'
import LoadingSpinner from '../../components/UI/LoadingSpinner'

const NewCommentForm = (props) => {
    const commentTextRef = useRef()
    const { sendRequest, status, error } = useHttp(addComment)
    const { onAddedComment } = props

    useEffect(() => {
        if (status === 'completed' && !error) {
            onAddedComment()
        }
    }, [status, error, onAddedComment])

    const submitFormHandler = (event) => {
        event.preventDefault()
        const enteredText = commentTextRef.current.value

        sendRequest({
            commentData: { text: enteredText },
            quoteId: props.quoteId
        })

        commentTextRef.current.value = ''
    }

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {status === 'pending' && <LoadingSpinner />}
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label className='cinzel mt-4' htmlFor='comment'>
                    Your Comment
                </label>
                <textarea id='comment' rows='2' ref={commentTextRef}></textarea>
            </div>
            <div className='actions'>
                <button className='btn btn-info btn-sm mt-2'>Add Comment</button>
            </div>
        </form>
    )
}

export default NewCommentForm
