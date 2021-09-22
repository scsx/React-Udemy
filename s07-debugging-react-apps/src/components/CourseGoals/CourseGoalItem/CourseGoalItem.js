import React from 'react'

const CourseGoalItem = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id)
    }

    return (
        <li className='goal-item list-group-item' onClick={deleteHandler}>
            {props.children}
        </li>
    )
}

export default CourseGoalItem
