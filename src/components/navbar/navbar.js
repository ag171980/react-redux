import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Navbar, Offcanvas, Nav, Form, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    const [word, setWord] = useState('')

    const navigate = useNavigate()
    const searr = useSelector(state => state.search)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searr)
        console.log(word)
        // navigate('/result')
    }
    useEffect(() => {

    }, [word])

    return (
        <Navbar bg="dark" expand='sm' variant='dark' className="mb-3 text-white">
            <Container fluid>
                <Navbar.Brand href="#">Tasks App</Navbar.Brand>
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
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link className='link-navbar' to='/'>Tasks</Link>
                            <Link className='link-navbar' to='/create-task'>Create</Link>
                        </Nav>
                        <Form className="d-flex" onSubmit={handleSubmit}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                name='taskToSearch'
                                onChange={(e) => setWord(e.target.value)}
                                value={word}
                            />
                            <Button variant="outline-success" type="submit">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}