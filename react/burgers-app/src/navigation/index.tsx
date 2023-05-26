import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { getAuth, signOut } from 'firebase/auth';
import { useUserContext } from '../controllers/user-context';

export const Navigation = () => {
    const user = useUserContext();

    const handleLogoutClick = () => {
        // FIREBASE
        const auth = getAuth();
        signOut(auth);
        //
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    component={Link} 
                    to="/"
                    sx={{ mr: 2 }}
                >
                    <Avatar src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
                    Burgers App
                </Typography>
                <Button color="inherit" component={Link} to="/menu">Menu</Button>
                {user && <Button color="inherit" component={Link} to="/admin">Admin</Button>}
                <div style={{ flexGrow: 1 }} />
                {user 
                    ? <Button color="inherit" onClick={handleLogoutClick}>Log out</Button>
                    : <Button color="inherit" component={Link} to="/sign">Log in</Button>
                }
            </Toolbar>
        </AppBar>
    )
}