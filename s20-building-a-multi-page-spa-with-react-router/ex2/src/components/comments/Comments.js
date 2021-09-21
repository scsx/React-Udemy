import { useState, useEffect, useCallback } from 'react'
import NewCommentForm from './NewCommentForm'
import { useParams } from 'react-router-dom'
import useHttp from '../../hooks/use-http'
import { getAllComments } from '../../lib/api'
import LoadingSpinner from '../UI/LoadingSpinner'
import CommentsList from './CommentsList'

const Comments = () => {
    const [isAddingComment, setIsAddingComment] = useState(false)
    const params = useParams()

    const {
        sendRequest,
        status,
        data: loadedComments
    } = useHttp(getAllComments)

    const { quoteId } = params

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    const startAddCommentHandler = () => {
        setIsAddingComment(true)
    }

    const addedCommentHandler = useCallback(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    let comments
    if (status === 'pending') {
        comments = (
            <div className='loadingcomments'>
                <LoadingSpinner />
            </div>
        )
    }

    if (
        status === 'completed' &&
        (loadedComments || loadedComments.length > 0)
    ) {
        comments = <CommentsList comments={loadedComments} />
    }

    if (
        status === 'completed' &&
        (!loadedComments || loadedComments.length === 0)
    ) {
        comments = <p>No comments yet... Be the first to comment.</p>
    }

    return (
        <section className='comments'>
            <h5 className='cinzel'>User Comments</h5>
            {comments}
            {!isAddingComment && (
                <button
                    className='btn btn-sm btn-info mt-3'
                    onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && (
                <NewCommentForm
                    quoteId={quoteId}
                    onAddedComment={addedCommentHandler}
                />
            )}
        </section>
    )
}

export default Comments
