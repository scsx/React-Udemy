import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <div className='bblack'>
            <Container>
                <header className={classes.header}>
                    <Link to='/'>
                        <div className={classes.logo + ' cblue'}>
                            React Auth
                        </div>
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/auth'>Login</Link>
                            </li>
                            <li>
                                <Link to='/profile'>Profile</Link>
                            </li>
                            <li>
                                <Button variant='outline-primary'>
                                    Logout
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </Container>
        </div>
    )
}

export default MainNavigation
