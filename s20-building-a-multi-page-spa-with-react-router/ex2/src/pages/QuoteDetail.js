import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
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
    const match = useRouteMatch()
    console.log(JSON.stringify(match))
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
            {/* This hides the button if the comments are visible */}
            <Route path={match.path}>
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
