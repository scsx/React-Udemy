import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
    return (
        <div className='album py-4 bg-light'>
            <div className='container'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                    {props.movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            title={movie.title}
                            releaseDate={movie.releaseDate}
                            openingText={movie.openingText}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList
