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
                        <h1>
                            <span>
                                M<small>y</small>
                            </span>
                            F<small>oods</small>
                        </h1>
                    </div>
                    <HeaderCartButton onClickToShowCart={props.onShowCart} />
                </div>
            </div>

            <div
                className='foodbck'
                style={{ backgroundImage: `url(${foodImage})` }}></div>
        </header>
    )
}

export default Header
