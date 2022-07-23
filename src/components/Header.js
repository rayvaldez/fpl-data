import React from 'react';
import Box from '@mui/material/Box';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';


const Header = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Box sx={{
      width: '100%',
      backgroundColor: '#151515'
    }}>
      <ThemeProvider theme={theme}>
        <Typography variant="h4" sx={{
          fontFamily: 'Masque',
          fontSize: '1.5rem',
          color: '#FAF9F6',
          p: '.8rem 0.7em'
        }}>FPL</Typography>
        <Typography variant="h4" sx={{
          fontFamily: 'Masque',
          fontSize: '.95rem',
          color: '#FAF9F6',
          mt: '-1.25rem',
          p: '0 0.9em'
        }}>Rank</Typography>
      </ThemeProvider>
    </Box>
  )
}

export default Header;
