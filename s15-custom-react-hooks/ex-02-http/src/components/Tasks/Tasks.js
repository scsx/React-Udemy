import Section from '../UI/Section'
import TaskItem from './TaskItem'

const Tasks = (props) => {
    let taskList = (
        <h2 className='text-white mt-5 text-center'>
            No tasks found. Start adding some!
        </h2>
    )
    if (props.items.length > 0) {
        taskList = (
            <ul className='list-group'>
                {props.items.map((task) => (
                    <TaskItem key={task.id}>{task.text}</TaskItem>
                ))}
            </ul>
        )
    }
    let content = taskList
    if (props.error) {
        content = <button className='btn btn-success' onClick={props.onFetch}>Try again</button>
    }
    if (props.loading) {
        content = 'Loading tasks...'
    }

    return (
        <Section>
            <div className='alltasks'>{content}</div>
        </Section>
    )
}

export default Tasks
