import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigation = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>My App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About me</Nav.Link>
            <Nav.Link>Game</Nav.Link>
            <Nav.Link>Forms</Nav.Link>
            <Nav.Link>Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}