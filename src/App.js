import React from 'react';
import './App.css';
import StandingsContainer from './containers/StandingsContainer';
import ManagerContainer from './containers/ManagerContainer';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Routes>
        <Route path="/standings" element={<StandingsContainer />} />
        <Route path="/manager" element={<ManagerContainer />} />
      </Routes>
    );
  }
}

export default App;
