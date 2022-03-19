import React from 'react';
import ManagerInput from '../components/ManagerInput';
import Manager from '../components/Manager';

class ManagerContainer extends React.Component {

  state = {
    manager: {}
  };

  fetchManager = (managerId) => {
    fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/entry/${managerId}/history/`)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(data => {
        this.setState({ manager: data });
      });
  }

  render() {
    return (
      <div className="managerContainer">
        <h2>Manager Container</h2>
        <ManagerInput fetchManager={this.fetchManager}/>
        <Manager manager={this.state.manager}/>
      </div>
    )
  }
}



export default ManagerContainer;
