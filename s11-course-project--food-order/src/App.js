import './scss/App.scss'
import Header from './components/Layout/Header'
import MealsSummary from './components/Meals/MealsSummary'
import AvailableMeals from './components/Meals/AvailableMeals'

function App() {
    return (
        <div className='App'>
            <Header />
            <div className='container'>
                <MealsSummary />
                <AvailableMeals />
            </div>
        </div>
    )
}

export default App
