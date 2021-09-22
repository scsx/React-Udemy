import React from 'react'
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem'

const CourseGoalList = (props) => {
    return (
        <ul className='goal-list list-group'>
            {props.items.map((goal) => (
                <CourseGoalItem
                    key={goal.id}
                    id={goal.id}
                    onDelete={props.onDeleteItem}>
                    {goal.text}
                </CourseGoalItem>
            ))}
        </ul>
    )
}

export default CourseGoalList
