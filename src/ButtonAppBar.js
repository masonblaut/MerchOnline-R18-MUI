import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Outlet } from 'react-router-dom'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <nav>
        <Toolbar>
          {/* <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MerchOnline v4.0
          </Typography>
          
          <Button color="inherit" > <NavLink to="/">Home</NavLink></Button>
          <Button color="inherit"><NavLink to="register">Register</NavLink></Button>
          <Button color="inherit"><NavLink to="login">Login</NavLink></Button>
          <Button color="inherit"><NavLink to="profile">Profile</NavLink></Button>
          <Button color="inherit"><NavLink to="cart">Cart</NavLink></Button>
          <Button color="inherit"><NavLink to="about">About</NavLink></Button>
          <Button color="inherit"><NavLink to="logout">LogOut</NavLink></Button>
        </Toolbar>
        </nav>
        <main>
                <Outlet />
            </main>
      </AppBar>
    </Box>
  );
}