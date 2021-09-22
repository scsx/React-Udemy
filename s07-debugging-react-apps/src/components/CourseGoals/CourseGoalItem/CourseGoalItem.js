import React from 'react'

const CourseGoalItem = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id)
    }

    return (
        <li className='goal-item list-group-item' onClick={deleteHandler}>
            <h5 className='m-0'>{props.children}</h5>
            <p className='m-0'>id: {props.dataKey}</p>
        </li>
    )
}

export default CourseGoalItem
