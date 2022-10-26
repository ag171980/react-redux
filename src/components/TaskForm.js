
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'

import { Form, Button, Card, FloatingLabel, InputGroup } from 'react-bootstrap';

import NavBar from './navbar/navbar';
function TaskForm() {
    let { id } = useParams()
    const [task, setTask] = useState({
        title: '',
        description: '',
        completed: false,
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const tasks = useSelector(state => state.tasks)
    const handleChange = e => {
        console.log(e.target.value)
        if (e.target.name === "completed") {
            setTask({
                ...task,
                [e.target.name]: e.target.checked
            })
        } else {
            setTask({
                ...task,
                [e.target.name]: e.target.value
            })
        }

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
    }, [id])



    return (
        <div className='taskForm'>
            <NavBar />
            <Card bg='dark' text='' style={{ padding: "20px" }} className="container-form">
                <h1 className='text-white'>Create your Task</h1>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel controlId="floatingInputGrid" label="Title of task">
                            <Form.Control type="text" name='title' placeholder="Title of task 1" onChange={handleChange} value={task.title} required />
                        </FloatingLabel>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <FloatingLabel controlId="floatingTextarea2" label="Description of task">
                            <Form.Control
                                name='description'
                                as="textarea"
                                placeholder="Description of task 1"
                                onChange={handleChange}
                                value={task.description}
                                style={{ height: '100px' }}
                                required
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <InputGroup className='mb-3'>

                        <Form.Check
                            inline
                            name="completed"
                            type='checkbox'
                            id={`inline-checkbox-1`}
                            onChange={handleChange}
                            checked={task.completed}
                        />

                        <Form.Check.Label className='text-white mr-3'>Completed? {(task.completed) ? "Yes" : "No"}</Form.Check.Label>
                    </InputGroup>
                    <Button variant="primary" type="submit">
                        Create Task
                    </Button>
                </Form>
            </Card>
        </div>
    )

}
export default TaskForm