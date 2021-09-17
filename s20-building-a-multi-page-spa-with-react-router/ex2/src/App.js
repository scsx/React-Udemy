import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllQuotes from './pages/AllQuotes'
import QuoteDetail from './pages/QuoteDetail'
import NewQuote from './pages/NewQuote'
import NotFound from './pages/NotFound'

function App() {
    return (
        <Layout>
            <div className='container'>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/quotes' />
                    </Route>
                    <Route path='/quotes' exact>
                        <AllQuotes />
                    </Route>
                    <Route path='/quotes/:quoteId'>
                        {' '}
                        <QuoteDetail />
                    </Route>
                    <Route path='/new-quote'>
                        <NewQuote />
                    </Route>
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </Layout>
    )
}

export default App
