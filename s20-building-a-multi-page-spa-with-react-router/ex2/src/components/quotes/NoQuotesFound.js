import { Link } from 'react-router-dom'

const NoQuotesFound = () => {
    return (
        <div className='noquotesfound'>
            <div className='alert alert-info' role='alert'>
                <h1 className='mt-0 mb-4 cinzel'>No quotes found!</h1>
                <Link
                    className='btn btn-info'
                    to='/new-quote'>
                    Add a Quote
                </Link>
            </div>
        </div>
    )
}

export default NoQuotesFound
