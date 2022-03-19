import React from 'react';
import Standings from '../components/Standings';
import StandingsInput from '../components/StandingsInput';

class StandingsContainer extends React.Component {

  state = {
    managers: {}
  };

  fetchLeague = (leagueId) => {
    fetch(`https://ancient-ocean-21689.herokuapp.com/https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(data => {
        this.setState({ managers: data });
      });
  }

  render() {
    return(
      <div>
        <StandingsInput fetchLeague={this.fetchLeague}/>
        <Standings managers={this.state.managers.standings}/>
      </div>
    )
  }

}

export default StandingsContainer;
