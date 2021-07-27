import useHttpHook from '../../hooks/use-http'

import Section from '../UI/Section'
import TaskForm from './TaskForm'

const NewTask = (props) => {
    const { isLoading, error, sendRequest: sendTaskRequest } = useHttpHook()

    const createTask = (taskText, taskData) => {
        const generatedId = taskData.name // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText }
        props.onAddTask(createdTask)
    }

    const enterTaskHandler = async (taskText) => {
        sendTaskRequest(
            {
                url: 'https://react-udemy-http-1fbf3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
                method: 'POST',
                body: { text: taskText },
                headers: {
                    'Content-Type': 'application/json'
                }
            },
            createTask.bind(null, taskText)
        )
    }

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    )
}

export default NewTask
