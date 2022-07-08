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
      backgroundColor: '#28282a'
    }}>
      <ThemeProvider theme={theme}>
        <Typography variant="h4" align="center">FPL Data</Typography>
      </ThemeProvider>
    </Box>
  )
}

export default Header;
