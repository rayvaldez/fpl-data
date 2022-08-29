import React from 'react';
import Standings from '../components/Standings';
import StandingsInput from '../components/StandingsInput';
import LeagueGraph from '../components/LeagueGraph';
import { fetchLeague } from '../actions/fetchLeague';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';


class StandingsContainer extends React.Component {

  // <LeagueGraph leagueData={this.props.managers}/>
  render() {
    return(
      <Box sx={{
        minHeight: '100vh',
        backgroundColor: '#151515'
      }}>     
        <StandingsInput fetchLeague={this.props.fetchLeague}/>
        <Standings managers={this.props.managers}/>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return {
    managers: state.leagueReducer.managers
  }
}

export default connect(mapStateToProps, {fetchLeague})(StandingsContainer)
