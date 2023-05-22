import { NavLink as RouterLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const getActiveStyles = ({ isActive }) => {
    return {
        textDecoration: isActive ? 'underline' : undefined
    }
}

export const Navigation = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>My App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={RouterLink} style={getActiveStyles} to="/">Home</Nav.Link>
            <Nav.Link as={RouterLink} style={getActiveStyles} to="/about-me">About me</Nav.Link>
            <Nav.Link as={RouterLink} style={getActiveStyles} to="/game">Game</Nav.Link>
            <Nav.Link as={RouterLink} style={getActiveStyles} to="/form">Form</Nav.Link>
            <Nav.Link as={RouterLink} style={getActiveStyles} to="/users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}