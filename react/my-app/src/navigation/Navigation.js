import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigation = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>My App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-me">About me</Nav.Link>
            <Nav.Link as={Link} to="/game">Game</Nav.Link>
            <Nav.Link as={Link} to="/form">Form</Nav.Link>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}