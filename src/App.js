import React from 'react';
import './App.css';
import Standings from './components/Standings';

class App extends React.Component {

  state = {
    user: {},
    input: ''
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('fetching')
    fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/leagues-classic/${this.state.input}/standings/`)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>FPL Data</h1>
        <div className="inputManager">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="user" onChange={this.handleChange}/>
            <input type="submit" value="submit"/>
          </form>
        </div>
        <Standings managers={this.state.user.standings}/>
      </div>
    );
  }
}

export default App;
