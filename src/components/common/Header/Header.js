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
    <Toolbar sx={{backgroundColor: '#7b79ff'}}>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: 'white' }}>
        Morgan.L
      </Typography>
    </Toolbar>
  );
}

export default Header;