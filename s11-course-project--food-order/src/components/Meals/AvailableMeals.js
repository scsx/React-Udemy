import React from 'react'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Combi Sushi Sashimi 2 pax',
        description:
            'Combinado de 48 unids para 2 pessoas 4 unds uramaki 24 unds makimonio 6 nigiri 4 variedades de sashimi (atum,salmão, peixe manteiga, robalo)',
        price: 28.9
    },
    {
        id: 'm2',
        name: 'Sashimi Misto',
        description: 'Caixa de 22 unidades.',
        price: 9.9
    },
    {
        id: 'm3',
        name: 'Maki misto frito doce',
        description:
            '15un. Maki misto frito (amendoim com molho de morango e chocolate)',
        price: 8.9
    },
    {
        id: 'm4',
        name: 'Panados Frango frito de amendoim',
        description: '7un. Panados de frango frito com amendoim',
        price: 18.9
    },
    {
        id: 'm5',
        name: 'Salmão skin mix',
        description:
            'Caixa de 5un. de nigiri salmão skin , 8un. maki de salmão skin',
        price: 8.9
    }
]

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />
    })
    return (
        <Card className='mealscard'>
            <ul className='list-group mealslist'>{mealsList}</ul>
        </Card>
    )
}

export default AvailableMeals
