import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'

//Components
import { Container, Form, Card, Navbar, NavDropdown, Offcanvas, Nav, Button, Stack } from 'react-bootstrap';
import NavBar from './navbar/navbar';

//Bootstrap Icons
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

import './tasks.css'
function TaskList() {
    // const [searched, setSearched] = useState(false)
    const tasks = useSelector(state => state.tasks)
    const searr = useSelector(state => state.search)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    
    
    return (
        <div className='taskList'>
            <NavBar />
            <h1 className='text-white'>Your Tasks</h1>
            <div className='container-tasks'>
                <div className='tasks'>

                    {
                        tasks.map((task, index) => {
                            return (
                                <Card className='task' key={index} style={{ width: '18rem' }} bg='dark' text='light'>
                                    <Card.Body>
                                        <Card.Title>{task.title}</Card.Title>
                                        <Card.Text>
                                            {task.description}
                                        </Card.Text>
                                        <Button style={{ margin: "0 5px" }} variant="primary">
                                            <Link to={`/edit-task/${task.id}`} className='text-white'>
                                                <FiEdit3 />
                                            </Link>
                                        </Button>
                                        <Button style={{ margin: "0 5px" }} variant='danger' onClick={() => handleDelete(task.id)}>
                                            <AiOutlineDelete />
                                        </Button>


                                    </Card.Body>
                                </Card>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
export default TaskList