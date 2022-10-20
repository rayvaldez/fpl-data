import React from 'react';
import Box from '@mui/material/Box';
import LandingInformation from '../components/LandingTeamInformation';
import DeadlineTimer from '../components/DeadlineTimer';
import DreamTeam from '../components/DreamTeam';
import CurrentGameweekFixtures from '../components/CurrentGameweekFixtures';
import PreviousGameweekFixtures from '../components/PreviousGameweekFixtures';
import Next5Fixtures from '../components/Next5Fixtures';
import InForm from '../components/InForm/InForm';

import { fetchInformation } from '../actions/fetchInformation';
import { connect } from 'react-redux';

class LandingContainer extends React.Component {

  componentDidMount() {
    this.props.fetchInformation()
  }

  render() {

    const findDreamTeamGW = () => {
      if (this.props.information.general?.events[this.props.information.currentGW - 1].is_current === false) {
        return this.props.information.general?.events[this.props.information.currentGW - 2]
      } else {
        return this.props.information.general?.events[this.props.information.currentGW - 1]
      }
    }
    console.log(this.props)
    return (
      <Box sx={{ paddingBottom: '10vh' }}>
        <DeadlineTimer nextGW={this.props.information.general?.events[this.props.information.currentGW - 1]}/>
        <CurrentGameweekFixtures fixtures={this.props.information.fixtures} currentGW={this.props.information.currentGW} />
        <DreamTeam currentGW={findDreamTeamGW()} />
        <PreviousGameweekFixtures fixtures={this.props.information.fixtures} previousGW={this.props.information.previousGW} />
        <Next5Fixtures fixtures={this.props.information.fixtures} currentGW={this.props.information.currentGW} />
        <InForm fixtures={this.props.information.fixtures} nextGW={this.props.information.currentGW} />
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