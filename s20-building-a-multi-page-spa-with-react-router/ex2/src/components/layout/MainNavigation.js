import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header>
            <div className='container'>
                <div className={classes.header}>
                    <div className={classes.logo + ' cinzel'}>
                        <NavLink to='/'>Great Quotes</NavLink>
                    </div>
                    <nav className='nav'>
                        <ul>
                            <li>
                                <NavLink to='/quotes' activeClassName='active'>
                                    All quotes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/new-quote'
                                    activeClassName='active'>
                                    Add a quote
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default MainNavigation
