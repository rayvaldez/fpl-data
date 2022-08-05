import React from 'react';
import Box from '@mui/material/Box';
import './App.css';
import StandingsContainer from './containers/StandingsContainer';
import ManagerContainer from './containers/ManagerContainer';
import LandingContainer from './containers/LandingContainer';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const theme = createTheme({
  typography: {
    fontFamily: 
      'Roboto'
  }
})

class App extends React.Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{
          width: '100%',
          height: '95vh',
          backgroundColor: '#151515',
          pt: '1vh'
        }}>
          <Routes>
            <Route path="/fpl-data" element={<LandingContainer />} />
            <Route path="/fpl-data/standings" element={<StandingsContainer />} />
            <Route path="/fpl-data/manager" element={<ManagerContainer />} />
          </Routes>
        </Box>
      </ThemeProvider>
    );
  }
}

export default App;
