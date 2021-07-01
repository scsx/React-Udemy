import React from 'react'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Combi Sushi Sashimi 2 pax',
    description: 'Combinado de 48 unids para 2 pessoas 4 unds uramaki 24 unds makimonio 6 nigiri 4 variedades de sashimi (atum,salmao.peixe manteiga, robalo)',
    price: 28.90,
  },
  {
    id: 'm2',
    name: 'Sashimi Misto',
    description: 'Caixa de 22 unidades.',
    price: 9.90,
  },
  {
    id: 'm3',
    name: 'Maki misto frito doce',
    description: '15un. Maki misto frito (amendoim com molho de morango e chocolate)',
    price: 8.90,
  },
  {
    id: 'm4',
    name: 'Panados Frango frito de amendoim',
    description: '7un. Panados frango frito de amendoim',
    price: 18.90,
  },
  {
    id: 'm5',
    name: 'Salmão skin mix',
    description: 'Caixa de 5 unidades de nigiri salmão skin ,8unds de maki salmão skin',
    price: 8.90,
  },
];


const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => {
        return <li className='list-group-item'>{meal.name}</li>
    })
    return <ul className='list-group'>
        {mealsList}
    </ul>
}

export default AvailableMeals
