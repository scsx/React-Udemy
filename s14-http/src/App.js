import React, {useState} from 'react'
import './App.css'
import MoviesList from './components/MoviesList'

function App() {
    const [movies, setMovies] = useState([])
    const fetchMoviesHandler = () => {
        fetch('https://swapi.dev/api/films/').then(response => {
            return response.json()
        }).then(data => {
            const transformedData = data.results.map(mov => {
                return {
                    id: mov.episode_id,
                    title: mov.title,
                    openingText: mov.opening_crawl,
                    releaseDate: mov.release_date
                }
            })
            setMovies(transformedData)
            console.log(data.results)
        })
    }
    // 

    return (
        <main>
            <div className='sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark'>
                <span className='fs-4'>Movie DB</span>
                <button className='btn btn-primary mt-4' onClick={fetchMoviesHandler}>Fetch Movies</button>
            </div>
            <section className='movies d-flex flex-column'>
                <MoviesList movies={movies} />
            </section>
        </main>
    )
}

export default App

/*
const dummyMovies = [
        {
            id: 1,
            title: 'Criminal Minds',
            openingText:
                "The cases of the F.B.I. Behavioral Analysis Unit (B.A.U.), an elite group of profilers who analyze the nation's most dangerous serial killers and individual heinous crimes in an effort to anticipate their next moves before they strike again.",
            releaseDate: '2005-05-18'
        },
        {
            id: 2,
            title: 'Elevator to the Gallows',
            openingText: 'A self-assured businessman murders his employer, the husband of his mistress, which unintentionally provokes an ill-fated chain of events.',
            releaseDate: '1958-03-19'
        },
        {
            id: 3,
            title: 'Nausicaä of the Valley of the Wind',
            openingText: 'Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.',
            releaseDate: '1984-03-10'
        }
    ]
*/
