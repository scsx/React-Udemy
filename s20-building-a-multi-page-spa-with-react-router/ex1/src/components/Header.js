import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div id='navbarBasicExample' className='navbar-menu'>
                <div className='navbar-start'>
                    <NavLink className='navbar-item' activeClassName='active' to='/welcome'>Welcome</NavLink>
                    <NavLink className='navbar-item' activeClassName='active' to='/clubs'>Clubs</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header
