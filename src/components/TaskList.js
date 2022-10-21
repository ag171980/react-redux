import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom'
function TaskList() {

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTask(id))

    }
    return (
        <div>
            <header>
                <h1>Tasks {tasks.length}</h1>
                <Link to='/create-task'>Create a Task</Link>
            </header>
            {
                tasks.map((task, index) => {
                    return (<div className='task' key={index}>
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </div>)
                })
            }</div>
    )
}
export default TaskList