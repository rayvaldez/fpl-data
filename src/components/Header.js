import React from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';


const Header = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4" align="center">FPL Data</Typography>
    </ThemeProvider>
  )
}

export default Header;
