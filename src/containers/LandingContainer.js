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
        <CurrentGameweekFixtures fixtures={this.props.information.fixtures} />
        <PreviousGameweekFixtures fixtures={this.props.information.fixtures} />
        <DreamTeam team={this.props.information.dreamTeam} />
        <Next5Fixtures fixtures={this.props.information.fixtures} />
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