import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import PremierLeague from '../images/Premier-League-White.png'


const Header = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Box>
      <AppBar position="static" sx={{
        backgroundColor: '#151515',
        width: '100%'
      }}>
        <Toolbar disableGutters>          
          <ThemeProvider theme={theme}>           
            <Typography variant="h4" sx={{
              fontFamily: 'Masque',
              fontSize: '1.5rem',
              color: '#FAF9F6',
              mt: '-0.2em', 
              ml: '0.8em'
            }}>FPL</Typography>
            <Typography variant="h4" sx={{
              fontFamily: 'Masque',
              fontSize: '.95rem',
              color: '#FAF9F6',
              mt: '1.8em',
              ml: '-3.51em'
            }}>Rank</Typography>
            <Box sx={{ mt: '0.6em', mr: '0.5em', position: 'absolute', right: '0'}}>
              <img src={PremierLeague} alt='logo' width="110" height="75" />
            </Box>                
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
