import React from 'react'
import './header.scss'
import foodImage from '../../assets/food.jpg'
import HeaderCartButton from '../Layout/HeaderCartButton'

const Header = (props) => {
    return (
        <header className='siteheader'>
            <div className='content'>
                <div className='d-flex'>
                    <div className='flex-grow-1'>
                        {/* <div className="hamburger">
                            <div className="center">
                                <div></div>
                            </div>
                        </div> */}
                        <h1>
                            M<small>y</small>F<small>oods</small>
                        </h1>
                    </div>
                    <HeaderCartButton />
                </div>
            </div>

            <div
                className='foodbck'
                style={{ backgroundImage: `url(${foodImage})` }}></div>
        </header>
    )
}

export default Header
