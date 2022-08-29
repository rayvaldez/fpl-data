import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import PremierLeague from '../images/Premier-League-White.png'


const Header = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <AppBar position="static" sx={{
      backgroundColor: '#151515' }}>
      <Toolbar disableGutters sx={{ width: '100vw'}}>          
        <ThemeProvider theme={theme}>
          <Grid justify="space-between" container spacing={24}>
            <Grid item xs={6}>                
              <Typography variant="h4" sx={{
                fontFamily: 'Masque',
                fontSize: '1.5rem',
                color: '#FAF9F6',
                mt: '0.4em', 
                ml: '0.8em'
              }}>FPL</Typography>
              <Typography variant="h4" sx={{
                fontFamily: 'Masque',
                fontSize: '.95rem',
                color: '#FAF9F6',
                mt: '-0.57em',
                ml: '1.1em'
              }}>Rank</Typography>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ mt: '-0.5em', mb: '-0.8em', pl: '0.1em'}}>
                <img src={PremierLeague} alt='logo' width="110" height="75" />
              </Box>                
            </Grid>
          </Grid>
        </ThemeProvider>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
