import { Container, Nav, Navbar, Form, Button}  from 'react-bootstrap';
import { Link, NavLink, useParams } from 'react-router-dom';
import './Header.css';

const Header = ({isAuthenticated, toggleAuthentication}) => {
    console.log('isAuthenticated :', isAuthenticated)
    // const {isAuthenticated} = props

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto navbar1">
                    <Nav.Link>
                        <NavLink to="/">Home</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="profile">Profile</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="todo">Todo</NavLink>
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Button onClick={toggleAuthentication} variant="dark">
                        { isAuthenticated ? 'Login' : 'Logout'}
                    </Button>
                </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;