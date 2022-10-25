// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'


//Components
import { Card, Button } from 'react-bootstrap';
import NavBar from './navbar/navbar';
import NoTask from './notask/notask'

//Bootstrap Icons
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

import './tasks.css'
function TaskList() {
    // const [searched, setSearched] = useState(false)

    let tasks;
    const searr = useSelector(state => state.search.wordToSearch)
    //estado de la barra en este momento
    tasks = useSelector(state =>
        (searr) ? state.tasks.filter((task) => task.title.toLowerCase().includes(searr)) : state.tasks
    )

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
                    {tasks.length !== 0 &&
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
                    {tasks.length === 0 &&
                        <NoTask word={searr} />
                    }

                </div>
            </div>
        </div>
    )
}
export default TaskList