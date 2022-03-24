import React from 'react';
import Standings from '../components/Standings';
import StandingsInput from '../components/StandingsInput';
import { fetchLeague } from '../actions/fetchLeague';
import { connect } from 'react-redux';

class StandingsContainer extends React.Component {

  render() {
    return(
      <div>
        <StandingsInput fetchLeague={this.props.fetchLeague}/>
        <Standings managers={this.props.managers.standings}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    managers: state.managers
  }
}

export default connect(mapStateToProps, {fetchLeague})(StandingsContainer)
