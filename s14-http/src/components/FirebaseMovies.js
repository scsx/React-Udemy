import React, { useEffect, useState, useCallback } from 'react'
import AddMovie from './AddMovie'

const FirebaseMovies = () => {
    const [firebaseMovies, setFirebaseMovies] = useState([])
    const [isLoadingFB, setIsLoadingFB] = useState(false)
    const [errorFB, setErrorFB] = useState(null)

    // GET MOVIES
    const fetchFirebaseMoviesHandler = useCallback(async () => {
        setIsLoadingFB(true)
        setErrorFB(null)
        try {
            const response = await fetch(
                'https://react-udemy-http-1fbf3-default-rtdb.europe-west1.firebasedatabase.app/movies.json'
            )

            /*
            // Response Format:
            {
            "movies" : {
                    "-MfZqNUKyxe37EOV2WxO" : {
                    "openingText" : "First Order has risen from the fallen Galactic Empire and seeks to end the New Republic.",
                    "releaseDate" : "14-12-2015",
                    "title" : "The Force Awakens"
                    }
                }
            }
            */

            if (!response.ok) {
                // This will be error.message:
                throw new Error('Something went wrong')
            }

            const data = await response.json()
            console.log(data)

            const loadedMovies = []

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate
                })
            }

            setFirebaseMovies(loadedMovies)
        } catch (error) {
            setErrorFB(error.message)
        }
        setIsLoadingFB(false)
    }, [])

    useEffect(() => {
        fetchFirebaseMoviesHandler()
    }, [fetchFirebaseMoviesHandler])

    const getFirebaseMovieshandler = () => {
        fetchFirebaseMoviesHandler()
    }

    // WRITE MOVIES
    let firebaseContent = (
        <div className='alert alert-secondary' role='alert'>
            <h5>Found no movies</h5>
        </div>
    )
    if (firebaseMovies.length > 0) {
        firebaseContent = firebaseMovies.map((mov) => (
            <div className='firemov' key={mov.id}>
                <h6>{mov.title}</h6>
                <p>
                    {mov.openingText} <i>{mov.releaseDate}</i>
                </p>
            </div>
        ))
    }
    if (errorFB) {
        firebaseContent = (
            <div className='alert alert-danger' role='alert'>
                <h5>{errorFB}</h5>
            </div>
        )
    }
    if (isLoadingFB) {
        firebaseContent = (
            <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        )
    }

    // ADD MOVIE
    async function addMovieHandler(movie) {
        const response = await fetch(
            'https://react-udemy-http-1fbf3-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
            {
                method: 'POST',
                body: JSON.stringify(movie),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }

    return (
        <div className='fbmovies mt-4'>
            <div className='card text-white bg-secondary'>
                <div className='card-body'>
                    <div className='movieform'>
                        <h5 className='card-title'>Firebase movies</h5>
                        <AddMovie
                            onAddMovie={addMovieHandler}
                            onGetMovies={getFirebaseMovieshandler}
                        />
                    </div>
                    <div className='fbmoviesresults'>{firebaseContent}</div>
                </div>
            </div>
        </div>
    )
}

export default FirebaseMovies
