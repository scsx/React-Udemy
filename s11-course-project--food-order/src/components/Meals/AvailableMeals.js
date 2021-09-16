import React, { useEffect, useState } from 'react'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState()

    useEffect(() => {
        // This is a const because useEffect can't be async
        const fetchMeals = async () => {
            const response = await fetch(
                'https://react-udemy-courseproject-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
            )

            if (!response.ok) {
                console.log(response)
                throw new Error('Something went wrong')
            }

            const responseData = await response.json()
            const loadedMeals = []
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }

            setMeals(loadedMeals)
            setIsLoading(false)
        }

        fetchMeals().catch((error) => {
            console.log(error)
            setIsLoading(false)
            setHttpError(error.message)
        })
    }, [])

    if (isLoading) {
        return (
            <Card className='nomeals'>
                <h5>Loading...</h5>
            </Card>
        )
    }

    if (httpError) {
        return (
            <Card className='nomeals error'>
                <h5>{httpError}</h5>
            </Card>
        )
    }

    const mealsList = meals.map((meal) => {
        return (
            <MealItem
                key={meal.id}
                id={meal.id}
                meal={meal}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        )
    })
    return (
        <Card className='mealscard'>
            <ul className='list-group mealslist'>{mealsList}</ul>
        </Card>
    )
}

export default AvailableMeals
