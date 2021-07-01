import React from 'react'
import './header.scss'
import foodImage from '../../assets/food.jpg'
import HeaderCartButton from '../Layout/HeaderCartButton'

const Header = (props) => {
    console.log(foodImage)
    return (
        <header className='siteheader'>
            <div className='content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h1>Meals</h1>
                        </div>
                        <div className='col alright'>
                            <HeaderCartButton />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className='foodbck'
                style={{ backgroundImage: `url(${foodImage})` }}></div>
        </header>
    )
}

export default Header
