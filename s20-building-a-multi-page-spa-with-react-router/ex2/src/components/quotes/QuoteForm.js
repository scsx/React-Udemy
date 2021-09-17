import { useRef, useState } from 'react'
import { Prompt } from 'react-router-dom'

import Card from '../UI/Card'
import LoadingSpinner from '../UI/LoadingSpinner'
import classes from './QuoteForm.module.css'

const QuoteForm = (props) => {
    const [isEntering, setIsEntering] = useState(false)
    const authorInputRef = useRef()
    const textInputRef = useRef()

    const submitFormHandler = (event) => {
        event.preventDefault()
        const enteredAuthor = authorInputRef.current.value
        const enteredText = textInputRef.current.value

        // optional: Could validate here

        props.onAddQuote({ author: enteredAuthor, text: enteredText })
    }

    const formFocusHandler = () => {
        setIsEntering(true)
    }

    const finishedEnteringHandler = () => {
        setIsEntering(false)
    }

    return (
        <div className='newquote'>
            <Prompt when={isEntering} message={(location) =>'Are you sure you want to leave?'} />
            <Card>
                <form className={classes.form} onSubmit={submitFormHandler}>
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner />
                        </div>
                    )}

                    <div className='form-group'>
                        <label htmlFor='author'>Author</label>
                        <input
                            className='form-control'
                            type='text'
                            id='author'
                            onFocus={formFocusHandler}
                            ref={authorInputRef}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='text'>Text</label>
                        <textarea
                            className='form-control'
                            id='text'
                            rows='5'
                            onFocus={formFocusHandler}
                            ref={textInputRef}></textarea>
                    </div>
                    <div className='formactions'>
                        <button onClick={finishedEnteringHandler} className='btn btn-info'>Add Quote</button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default QuoteForm
