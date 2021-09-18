import { Fragment } from 'react'
import { useHistory, useLocation } from 'react-router'

import QuoteItem from './QuoteItem'
import classes from './QuoteList.module.css'

const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1
        } else {
            return quoteA.id < quoteB.id ? 1 : -1
        }
    })
}

const QuoteList = (props) => {
    const history = useHistory()
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const isSortingAscending = queryParams.get('sort') === 'asc'
    const sortedQuotes = sortQuotes(props.quotes, isSortingAscending)

    const changeSortingHandler = () => {
        history.push({
            pathname: location.pathname,
            search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`
        })
    }

    return (
        <Fragment>
            <div className='sorting'>
                <button
                    onClick={changeSortingHandler}
                    className='btn btn-sm btn-outline-info ascdesc'>
                    {isSortingAscending
                        ? [
                              <span key='spanAsc'>&#8595; &#8593;</span>,
                              ' Ascending'
                          ]
                        : [
                              <span key='spanDesc'>&#8593; &#8595;</span>,
                              ' Descending'
                          ]}
                </button>
            </div>
            <ul className={classes.list}>
                {sortedQuotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </ul>
        </Fragment>
    )
}

export default QuoteList
