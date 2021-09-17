import { useParams, Route } from 'react-router-dom'
import Comments from '../components/comments/Comments'

const QuoteDetail = () => {
    const params = useParams()

    return (
        <div className='quotedetail'>
            <h1>Quote detail</h1>
            <div className='card'>
                <div className='card-body'>
                    <h2>{params.quoteId}</h2>
                    <Route path={`/quotes/${params.quoteId}/comments`}>
                        <Comments />
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default QuoteDetail
