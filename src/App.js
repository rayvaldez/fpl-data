import React from 'react';
import './App.css';
import StandingsContainer from './containers/StandingsContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>FPL Data</h1>
        <StandingsContainer />
      </div>
    );
  }
}

export default App;
