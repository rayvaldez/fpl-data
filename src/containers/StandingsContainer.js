import React from 'react';
import Standings from '../components/Standings';
import StandingsInput from '../components/StandingsInput';
import LeagueGraph from '../components/LeagueGraph';
import { fetchLeague } from '../actions/fetchLeague';
import { connect } from 'react-redux';

class StandingsContainer extends React.Component {

  // <LeagueGraph leagueData={this.props.managers}/>
  render() {
    return(
      <div>
        <StandingsInput fetchLeague={this.props.fetchLeague}/>
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
