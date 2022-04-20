import React from 'react';
import Standings from '../components/Standings';
import StandingsInput from '../components/StandingsInput';
import LeagueGraph from '../components/LeagueGraph';
import { fetchLeague } from '../actions/fetchLeague';
import { connect } from 'react-redux';

class StandingsContainer extends React.Component {

  render() {
    return(
      <div className="standings-container">
        <h2>Standings</h2>
        <StandingsInput fetchLeague={this.props.fetchLeague}/>
        <LeagueGraph leagueData={this.props.managers}/>
        <Standings managers={this.props.managers}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    managers: state.leagueReducer.managers
  }
}

export default connect(mapStateToProps, {fetchLeague})(StandingsContainer)
