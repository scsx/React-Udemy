import React from 'react'

const MealItem = (props) => {
    const price = `${props.meal.price.toFixed(2)} €`
    return (
        <li className='list-group-item'>
            <div className='row'>
                <div className='col'>
                    <h3>{props.meal.name}</h3>
                    <p>{props.meal.description}</p>
                    <div className='price'>{price}</div>
                </div>
                <div className='col-3 alright'>form</div>
            </div>
        </li>
    )
}

export default MealItem
