import React, { useState } from 'react'

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList'
import CourseInput from './components/CourseGoals/CourseInput/CourseInput'
import './App.css'

const App = () => {
    const [courseGoals, setCourseGoals] = useState([
        { text: 'Do all exercises', id: 'g1' },
        { text: 'Finish the course', id: 'g2' },
        { text: 'Learn Redux', id: 'g3' }
    ])

    const addGoalHandler = (enteredText) => {
        setCourseGoals((prevGoals) => {
            const updatedGoals = [...prevGoals]
            updatedGoals.unshift({ text: enteredText, id: 'g' + (prevGoals.length + 1).toString() })
            return updatedGoals
        })
    }

    const deleteItemHandler = (goalId) => {
        setCourseGoals((prevGoals) => {
            const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId)
            return updatedGoals
        })
    }

    let content = (
        <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
    )

    if (courseGoals.length > 0) {
        content = (
            <CourseGoalList
                items={courseGoals}
                onDeleteItem={deleteItemHandler}
            />
        )
    }

    return (
        <div className='container'>
            <section id='goal-form' className='card goal-form'>
                <div className='card-body'>
                    <CourseInput onAddGoal={addGoalHandler} />
                </div>
            </section>
            <section id='goals'>{content}</section>
        </div>
    )
}

export default App
