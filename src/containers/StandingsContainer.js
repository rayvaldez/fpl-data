import React from 'react';
import Standings from '../components/Standings';
import StandingsInput from '../components/StandingsInput';
import LeagueGraph from '../components/LeagueGraph';
import { fetchLeague } from '../actions/fetchLeague';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';


class StandingsContainer extends React.Component {

  render() {

    const findCurrentGW = () => {
      if (this.props.information.general?.events[this.props.information.currentGW - 2].is_current === true) {
        return this.props.information.general?.events[this.props.information.currentGW - 2].id
      } else {
        return this.props.information.general?.events[this.props.information.currentGW - 1].id
      }
    }    

    console.log(this.props)
    return(
      <Box sx={{
        minHeight: '100vh',
        backgroundColor: '#151515'
      }}>     
        <StandingsInput fetchLeague={this.props.fetchLeague} currentGW={findCurrentGW()}/>
        <Standings managers={this.props.managers} isLoading={this.props.isLoading}/>
        <LeagueGraph leagueData={this.props.managers} isLoading={this.props.isLoading}/>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return {
    managers: state.leagueReducer.managers,
    information: state.informationReducer.information,
    isLoading: state.leagueReducer.isLoading
  }
}

export default connect(mapStateToProps, {fetchLeague})(StandingsContainer)
