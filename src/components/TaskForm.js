
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
function TaskForm() {
    let { id } = useParams()
    const [task, setTask] = useState({
        title: '',
        description: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const tasks = useSelector(state => state.tasks)
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            dispatch(editTask(task))
        } else {
            dispatch(addTask({
                ...task,
                id: uuid()
            }))
        }
        navigate('/')
    }

    useEffect(() => {
        if (id) {
            setTask(tasks.find(task => task.id === id))
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' placeholder="title" onChange={handleChange} value={task.title} />
            <textarea name='description' placeholder='description' onChange={handleChange} value={task.description}></textarea>
            <button>Save</button>
        </form>
    )

}
export default TaskForm