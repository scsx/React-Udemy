import { useRef } from 'react'

const TaskForm = (props) => {
    const taskInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredValue = taskInputRef.current.value

        if (enteredValue.trim().length > 0) {
            props.onEnterTask(enteredValue)
        }
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className='input-group mb-3 input-group-lg'>
                <input
                    type='text'
                    className='form-control'
                    ref={taskInputRef}
                    placeholder="Task name"
                />
                <button className='btn btn-success' type='submit'>
                    {props.loading ? 'Sending...' : 'Add Task'}
                </button>
            </div>
        </form>
    )
}

export default TaskForm
