import { Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Clubs from './pages/Clubs'
import ClubDetail from './pages/ClubDetail'
import Header from './components/Header'

function App() {
    return (
        <div className='wrapper'>
            <Header />
            <div className='columns'>
                <div className='column is-one-third'>
                    <section className='hero'>
                        <div className='hero-body'>
                            <p className='title'>React Routing</p>
                            <p className='subtitle'>
                                Components are the heart of React's powerful,
                                declarative programming model. React Router is a
                                collection of navigational components that
                                compose declaratively with your application.
                            </p>
                        </div>
                    </section>
                </div>
                <div className='column'>
                    <Switch>
                        <Route path='/' exact>
                            <Redirect to='welcome' />
                        </Route>
                        <Route path='/welcome'>
                            <Welcome />
                        </Route>
                        <Route path='/clubs' exact>
                            <Clubs />
                        </Route>
                        <Route path='/clubs/:clubId'>
                            <ClubDetail />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App
