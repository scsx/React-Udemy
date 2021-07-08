import { useState } from 'react'
import './scss/App.scss'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }

    return (
        <div className='App'>
            <CartProvider>
                {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
                <Header onShowCart={showCartHandler} />
                <main>
                    <div className='container'>
                        <Meals />
                    </div>
                </main>
            </CartProvider>
        </div>
    )
}

export default App
