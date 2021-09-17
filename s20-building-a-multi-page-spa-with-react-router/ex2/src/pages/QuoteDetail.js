import { useParams, Route } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Medina Carreira',
        text: 'Enquanto não vir gente capaz de tomar conta deste país, sou incómodo.'
    },
    {
        id: 'q2',
        author: 'Millôr Fernandes',
        text: 'Chato - Indivíduo que tem mais interesse em nós do que nós temos nele.'
    },
    {
        id: 'q3',
        author: 'Medina Carreira',
        text: 'Portugal é o país dos achadores. Toda a gente acha. Liga-se a televisão e ouve-se toda a gente a achar.'
    },
    {
        id: 'q4',
        author: 'Millôr Fernandes',
        text: 'Democracia é quando eu mando em você, ditadura é quando você manda em mim.'
    }
]

const QuoteDetail = () => {
    const params = useParams()
    console.log(params)
    const quote = DUMMY_QUOTES.find((q) => q.id === params.quoteId)

    if (!quote) {
        return (
            <div className='noquotes'>
                <h2>No quote found!</h2>
                <p>Great Quotes</p>
            </div>
        )
    }

    return (
        <div className='quotedetail'>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <h1>Comments</h1>
            <div className='card'>
                <div className='card-body'>
                    <h2>Comments</h2>
                    <Route path={`/quotes/${params.quoteId}/comments`}>
                        <Comments />
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default QuoteDetail
