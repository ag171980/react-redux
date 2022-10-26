import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { Container, Navbar, Offcanvas, Nav, Form, Button } from 'react-bootstrap';

import { changeToState } from '../../features/searchs/searchSlice'
// import { changeToState } from '../../features/tasks/taskSlice'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    const [word, setWord] = useState('')

    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.checked)
        if (e.target.checked === undefined) {
            setWord(e.target.value)
        }
        // tasks = useSelector(state => state.tasks.filter((task) => task.title === "Task 1"));
        // tasks = dispatch(searchTask({ val: e.target.value, tasks: tasks }))
        // navigate('/result')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleClick = (e) => {
        console.log("a")
    }
    useEffect(() => {
        (word) ? dispatch(changeToState({ val: true, word: word })) : dispatch(changeToState({ val: false, word: word }))
    }, [word])

    return (
        <Navbar bg="dark" expand='sm' variant='dark' className="mb-3 text-white">
            <Container fluid>
                <Navbar.Brand><Link to='/'>Tasks App</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                    bg="dark"
                    variant="dark"

                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            onChange={(e) => handleChange(e)}
                        />
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link className='link-navbar' to='/'>Tasks</Link>
                            <Link className='link-navbar' to='/create-task'>Create</Link>
                        </Nav>
                        <Form className="d-flex" onSubmit={handleSubmit}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className=""
                                aria-label="Search"
                                name='taskToSearch'
                                onChange={(e) => handleChange(e)}
                            />
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}