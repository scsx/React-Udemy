import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
    return (
        <div className='album p-4 bg-light'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                {props.movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        releaseDate={movie.releaseDate}
                        openingText={movie.openingText}
                        episode={movie.episode}
                        producer={movie.producer}
                    />
                ))}
            </div>
        </div>
    )
}

export default MovieList
