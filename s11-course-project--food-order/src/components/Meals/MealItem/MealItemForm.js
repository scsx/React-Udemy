import React from 'react'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
    return (
        <form>
            <Input
                label='Amount'
                input={{ id: 'amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }}
            />
            <button type='submit' className='btn btn-primary'>
                + Add
            </button>
        </form>
    )
}

export default MealItemForm
