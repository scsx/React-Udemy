import React from 'react'
import { Button, Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

const HeaderCartButton = () => {
    return (
        <Button icon={<ShoppingCartOutlined />}>
            Your order
            <Badge count='23' color='blue' />
        </Button>
    )
}

export default HeaderCartButton
