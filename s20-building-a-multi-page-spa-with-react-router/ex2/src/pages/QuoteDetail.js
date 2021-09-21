import { useEffect } from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'

const QuoteDetail = () => {
    const params = useParams()
    const match = useRouteMatch()
    const { quoteId } = params

    const {
        sendRequest,
        status,
        data: loadedQuote,
        error
    } = useHttp(getSingleQuote, true)

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return (
            <div className='loadingquote'>
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return (
            <div className='alert alert-danger' role='alert'>
                <h1 className='mt-0 mb-2 cinzel'>{error}</h1>Check your URL
            </div>
        )
    }

    if (!loadedQuote) {
        return (
            <div className='noquotes'>
                <h2>No quote found!</h2>
                <p>Great Quotes</p>
            </div>
        )
    }

    return (
        <div className='quotedetail'>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            {/* This hides the button if the comments are visible */}
            <Route path={match.path} exact>
                {/* The button to comments itself gets hidden */}
                <Link
                    className='btn btn-sm btn-info'
                    to={`${match.url}/comments`}>
                    Load comments
                </Link>
            </Route>
            {/* This shows the comments */}
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetail
