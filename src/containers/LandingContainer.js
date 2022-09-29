import React from 'react';
import Box from '@mui/material/Box';
import LandingInformation from '../components/LandingTeamInformation';
import DeadlineTimer from '../components/DeadlineTimer';
import DreamTeam from '../components/DreamTeam';
import CurrentGameweekFixtures from '../components/CurrentGameweekFixtures';
import PreviousGameweekFixtures from '../components/PreviousGameweekFixtures';
import Next5Fixtures from '../components/Next5Fixtures';

import { fetchInformation } from '../actions/fetchInformation';
import { connect } from 'react-redux';

class LandingContainer extends React.Component {

  componentDidMount() {
    this.props.fetchInformation()
  }
  
  render() {
    return (
      <Box sx={{ paddingBottom: '10vh' }}>
        <DeadlineTimer />
        <CurrentGameweekFixtures fixtures={this.props.information.fixtures} currentGW={this.props.information.currentGW} />
        <PreviousGameweekFixtures fixtures={this.props.information.fixtures} currentGW={this.props.information.currentGW} />
        <DreamTeam currentGW={this.props.information.currentGW} />
        <Next5Fixtures fixtures={this.props.information.fixtures} currentGW={this.props.information.currentGW} />
        <LandingInformation />
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return {
    information: state.informationReducer.information
  }
}


export default connect(mapStateToProps, { fetchInformation })(LandingContainer);