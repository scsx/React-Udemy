import { useHistory } from 'react-router'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
    const history = useHistory()

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData)
        console.log(history)
        history.push('/quotes')
    }
    return <QuoteForm onAddQuote={addQuoteHandler} />
}

export default NewQuote
