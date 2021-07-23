import React from 'react'

const Movie = (props) => {
    return (
        <div className='col'>
            <div className='card shadow movietitle'>
                <div className='card-body'>
                    <h2>{props.title}</h2>
                    <h5>{props.releaseDate}</h5>
                    <hr />
                    <p className='card-text'>{props.openingText}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <button
                            type='button'
                            className='btn btn-sm btn-outline-secondary'>
                            Watch movie
                        </button>
                        <small className='text-muted'>9 dollars</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie
