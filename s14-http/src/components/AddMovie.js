import React, { useRef } from 'react'

function AddMovie(props) {
    const titleRef = useRef('')
    const openingTextRef = useRef('')
    const releaseDateRef = useRef('')

    function submitHandler(event) {
        event.preventDefault()

        // could add validation here...

        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value
        }

        props.onAddMovie(movie)
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='title' className='form-label'>
                Title
            </label>
            <input
                type='text'
                id='title'
                className='form-control'
                ref={titleRef}
            />
            <label htmlFor='opening-text' className='form-label'>
                Opening Text
            </label>
            <textarea
                className='form-control'
                rows='3'
                id='opening-text'
                ref={openingTextRef}></textarea>
            <label htmlFor='date' className='form-label'>
                Release Date
            </label>
            <input
                type='text'
                className='form-control'
                id='date'
                ref={releaseDateRef}
            />
            <div className='btn-group mt-3'>
                <button type='submit' className='btn btn-success btn-sm'>
                    Add movie
                </button>
                <button
                    type='button'
                    className='btn btn-primary btn-sm'
                    onClick={props.onGetMovies}>
                    Get movies
                </button>
            </div>
        </form>
    )
}

export default AddMovie
