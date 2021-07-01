import React from 'react'
import './header.scss'
import foodImage from '../../assets/food.jpg'
import { Row, Col, Button } from 'antd'
import HeaderCartButton from '../Layout/HeaderCartButton'

const Header = (props) => {
    console.log(foodImage)
    return (
        <header className='siteheader'>
            <div className='content'>
                <div className='container'>
                    <Row>
                        <Col span={12}>
                            <h1>Meals</h1>
                        </Col>
                        <Col span={12} className='alright'>
                            <HeaderCartButton />
                        </Col>
                    </Row>
                </div>
            </div>

            <div
                className='foodbck'
                style={{ backgroundImage: `url(${foodImage})` }}>
                sfv
            </div>
        </header>
    )
}

export default Header
