import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Header() {
  return (
    <Toolbar sx={{backgroundColor: '#0b0b0c'}}>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon color='white'/>
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: 'white' }}>
        test
      </Typography>
    </Toolbar>
  );
}

export default Header;