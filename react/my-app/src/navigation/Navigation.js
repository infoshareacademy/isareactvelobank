import { NavLink as RouterLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useThemeContext } from '../contexts/theme/ThemeContext';

const getActiveStyles = ({ isActive }) => {
    return {
        textDecoration: isActive ? 'underline' : undefined
    }
}

const links = [
    { path: '/', label: 'Home' },
    { path: '/about-me', label: 'About me' },
    { path: '/game', label: 'Game' },
    { path: '/form', label: 'Form' },
    { path: '/users', label: 'Users' },
    { path: '/sign', label: 'Sign' },
]

export const Navigation = () => {
    const { theme, setTheme} = useThemeContext();

    return (
      <Navbar bg={theme} variant={theme}>
        <Container>
          <Navbar.Brand>My App</Navbar.Brand>
          <Nav className="me-auto">
            {links.map((link) => (
                <Nav.Link as={RouterLink} style={getActiveStyles} to={link.path} key={link.path}>{link.label}</Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link onClick={() => setTheme('dark')}>Dark</Nav.Link>
            <Nav.Link onClick={() => setTheme('light')}>Light</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}