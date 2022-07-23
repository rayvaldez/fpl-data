import React from 'react';
import Box from '@mui/material/Box';
import './App.css';
import StandingsContainer from './containers/StandingsContainer';
import ManagerContainer from './containers/ManagerContainer';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Box sx={{
        width: '100%',
        height: '95vh',
        backgroundColor: '#151515'
      }}>
        <Routes>
          <Route path="/standings" element={<StandingsContainer />} />
          <Route path="/manager" element={<ManagerContainer />} />
        </Routes>
      </Box>
    );
  }
}

export default App;
