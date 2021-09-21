import { useEffect } from 'react'
import QuoteList from '../components/quotes/QuoteList'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api'

const AllQuotes = () => {
    const {
        sendRequest,
        status,
        data: loadedQuotes,
        error
    } = useHttp(getAllQuotes, true)

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    if (status === 'pending') {
        return (
            <div className='loadingquotes'>
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

    if (
        status === 'completed' &&
        (!loadedQuotes || loadedQuotes.length === 0)
    ) {
        return <NoQuotesFound />
    }

    return <QuoteList quotes={loadedQuotes} />
}

export default AllQuotes
