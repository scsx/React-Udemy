import React, { useEffect, useState, useCallback } from 'react'
import './App.css'
import MoviesList from './components/MoviesList'

function App() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const trimText = (theString) => {
        return `${theString.split('.')[1]}.`
    }

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch('https://swapi.dev/api/films/')

            if (!response.ok) {
                // This will be error.message:
                throw new Error('Something went wrong')
            }

            const data = await response.json()
            const transformedData = data.results.map((mov) => {
                return {
                    id: mov.episode_id,
                    title: mov.title,
                    openingText: trimText(mov.opening_crawl),
                    releaseDate: mov.release_date,
                    episode: mov.episode_id,
                    producer: mov.producer
                }
            })
            setMovies(transformedData)
        } catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
    }, [])

    useEffect(() => {
        fetchMoviesHandler()
    }, [])

    let content = (
        <div className='alert alert-secondary' role='alert'>
            <h3>Found no movies</h3>
            <p>Did you hit "fetch movies"?</p>
        </div>
    )
    if (movies.length > 0) {
        content = <MoviesList movies={movies} />
    }
    if (error) {
        content = (
            <div className='alert alert-danger' role='alert'>
                <h3>{error}</h3>
                <p>Check your life choices</p>
            </div>
        )
    }
    if (isLoading) {
        content = (
            <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        )
    }

    return (
        <main>
            <div className='sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark'>
                <h1 className='fs-4'>Movie DB</h1>
                <button
                    className='btn btn-primary mt-4'
                    onClick={fetchMoviesHandler}>
                    Fetch Movies
                </button>
            </div>
            <section className='movies d-flex flex-column'>{content}</section>
        </main>
    )
}

export default App
