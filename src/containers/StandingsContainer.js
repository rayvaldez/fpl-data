import React from 'react';
import Standings from '../components/Standings';
import StandingsInput from '../components/StandingsInput';
import LeagueGraph from '../components/LeagueGraph';
import { fetchLeague } from '../actions/fetchLeague';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';


class StandingsContainer extends React.Component {

  render() {
    return(
      <Box sx={{
        minHeight: '100vh',
        backgroundColor: '#151515'
      }}>     
        <StandingsInput fetchLeague={this.props.fetchLeague}/>
        <Standings managers={this.props.managers} isLoading={this.props.isLoading}/>
        <LeagueGraph leagueData={this.props.managers}/>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return {
    managers: state.leagueReducer.managers,
    isLoading: state.leagueReducer.isLoading
  }
}

export default connect(mapStateToProps, {fetchLeague})(StandingsContainer)
