import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';

export default function Navbar2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/" className="navLink">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          </NavLink>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MerchOnline MUI Demo
          </Typography>
          <NavLink to="/newProduct" className="navLink">
            <Button color="companyGreen">Create a New Product</Button>
          </NavLink>
          <NavLink to="/profile" className="navLink">
            <Button color="inherit">Profile</Button>
          </NavLink>
          <NavLink to="/login" className="navLink">
            <Button color="inherit">Login</Button>
          </NavLink>
          <NavLink to="/register" className="navLink">
            <Button color="inherit">Register</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}