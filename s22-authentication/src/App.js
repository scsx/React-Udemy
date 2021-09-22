import { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import UserProfile from './components/Profile/UserProfile'
import TextEditor from './components/TextEditor/TextEditor'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import AuthContext from './store/auth-context'

function App() {
    const authCtx = useContext(AuthContext)

    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                {!authCtx.isLoggedIn && (
                    <Route path='/auth'>
                        <AuthPage />
                    </Route>
                )}
                {/* See profile or go to login if not logged in */}
                <Route path='/profile'>
                    {authCtx.isLoggedIn && <UserProfile />}
                    {!authCtx.isLoggedIn && <Redirect to='/auth' />}
                </Route>
                {/* General redirect for wrong urls */}
                <Route path='/text'>
                    <TextEditor />
                </Route>
                <Route path='*'>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </Layout>
    )
}

export default App
