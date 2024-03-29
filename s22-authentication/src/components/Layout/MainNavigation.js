import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import AuthContext from '../../store/auth-context'

const MainNavigation = () => {
    const authCtx = useContext(AuthContext)
    const isLoggedIn = authCtx.isLoggedIn

    const logoutHandler = () => {
        authCtx.logout()
        // optional: redirect the user
    }

    return (
        <div className='mainheader bblack'>
            <Container>
                <header className='header'>
                    <Link to='/'>
                        <h2 className='cblue mt-1'>React Auth</h2>
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/text'>wysiwyg</Link>
                            </li>
                            {!isLoggedIn && (
                                <li>
                                    <Link to='/auth'>Login</Link>
                                </li>
                            )}
                            {isLoggedIn && (
                                <li>
                                    <Link to='/profile'>Profile</Link>
                                </li>
                            )}
                            {isLoggedIn && (
                                <li>
                                    <Button
                                        variant='outline-primary'
                                        onClick={logoutHandler}>
                                        Logout
                                    </Button>
                                </li>
                            )}
                        </ul>
                    </nav>
                </header>
            </Container>
        </div>
    )
}

export default MainNavigation
