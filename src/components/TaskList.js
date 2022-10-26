// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'


//Components
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import NavBar from './navbar/navbar';
import NoTask from './notask/notask'

//Bootstrap Icons
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

import './tasks.css'
import { useState } from 'react';
function TaskList() {
    // const [searched, setSearched] = useState(false)
    const [completed, setCompleted] = useState(undefined)
    let tasks;
    const searr = useSelector(state => state.search.wordToSearch)
    //estado de la barra en este momento
    tasks = useSelector(state =>
        (searr) ?
            state.tasks.filter((task) =>
                (completed) ?
                    task.title.toLowerCase().includes(searr) && task.completed === true
                    :
                    (completed === false) ?
                        task.title.toLowerCase().includes(searr) && task.completed === false
                        :
                        task.title.toLowerCase().includes(searr))

            :
            (completed) ?
                state.tasks.filter((task) => task.completed === true)
                :
                (completed === false) ?
                    state.tasks.filter((task) => task.completed === false)
                    :
                    state.tasks

    )

    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    const handleCompleted = (type) => {

        if (type === 'completed') {
            setCompleted(true)
        } else {
            if (type === "not completed") {
                setCompleted(false)
            } else {
                setCompleted(undefined)
            }

        }
    }
    return (
        <div className='taskList'>
            <NavBar />
            <h1 className='text-white'>Your Tasks {(completed) ? "Completed" : (completed === false) ? "Not Completed" : ""}</h1>
            <ButtonGroup className='mb-2' >
                <Button onClick={() => handleCompleted('all')} variant="success">
                    All
                </Button>
                <Button onClick={() => handleCompleted('completed')} variant="primary">
                    Completed
                </Button>
                <Button onClick={() => handleCompleted('not completed')} variant="danger">
                    Not completed
                </Button>
            </ButtonGroup>
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
                                        <Card.Text className={task.completed ? 'completed' : 'no-completed'}>

                                            {(task.completed) ? "Completed" : "No Completed"}

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