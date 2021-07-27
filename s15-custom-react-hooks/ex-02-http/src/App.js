import React, { useEffect, useState } from 'react'
import Tasks from './components/Tasks/Tasks'
import NewTask from './components/NewTask/NewTask'
import useHttpHook from './hooks/use-http'

function App() {
    const [tasks, setTasks] = useState([])

    // Destructuring what we expect to be returned from the custom hook so we can use here:
    const {
        isLoading,
        error,
        sendRequest: fetchTasks // Destructuring alias
    } = useHttpHook()

    useEffect(() => {
        // Function to pass to the custom hook (named 'applyData' there) to work the data received
        const transformTasks = (tasksObj) => {
            const loadedTasks = []
            for (const taskKey in tasksObj) {
                loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text })
            }
            setTasks(loadedTasks)
        }
        fetchTasks(
            {
                url: 'https://react-udemy-http-1fbf3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
            },
            transformTasks
        )
    }, [fetchTasks])

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task))
    }

    return (
        <div className='container py-5'>
            <h1 className='text-white mb-3 text-center'>Tasks</h1>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </div>
    )
}

export default App
