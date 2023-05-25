import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}
                >
                    <Avatar src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
                    Burgers App
                </Typography>
                <Button color="inherit">Menu</Button>
                <Button color="inherit">Admin</Button>
            </Toolbar>
        </AppBar>
    )
}