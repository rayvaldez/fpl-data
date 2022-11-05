import React from 'react';
import Box from '@mui/material/Box';
import LandingInformation from '../components/LandingTeamInformation';
import DeadlineTimer from '../components/DeadlineTimer';
import DreamTeam from '../components/DreamTeam';
import CurrentGameweekFixtures from '../components/CurrentGameweekFixtures';
import PreviousGameweekFixtures from '../components/PreviousGameweekFixtures';
import Next5Fixtures from '../components/Next5Fixtures';
import InForm from '../components/InForm/InForm';
import { Grid } from '@material-ui/core';

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
    
    return (
      <Grid container lg={12} item>
        <Grid item lg={12} md={12} sm={12} xs={12}><DeadlineTimer nextGW={this.props.information.general?.events[this.props.information.currentGW - 1]}/></Grid>
        <Grid item xl={12} md={12} lg={6} sm={6} xs={12}><CurrentGameweekFixtures fixtures={this.props.information.fixtures} currentGW={this.props.information.currentGW} /></Grid>
        <Grid item xl={6} md={6} lg={6} sm={6} xs={12}><PreviousGameweekFixtures fixtures={this.props.information.fixtures} previousGW={this.props.information.previousGW} /></Grid>
        <Grid item xl={6} md={6} lg={6} sm={12} xs={12}><DreamTeam currentGW={findDreamTeamGW()} /></Grid>
        <Grid item xl={6} md={6} lg={12} sm={12} xs={12}><Next5Fixtures fixtures={this.props.information.fixtures} currentGW={this.props.information.currentGW} /></Grid>
        <Grid item xl={6} md={6} lg={12} sm={12} xs={12}><InForm fixtures={this.props.information.fixtures} nextGW={this.props.information.currentGW} /></Grid>
        <Grid item xl={6} md={12} lg={12} sm={12} xs={12}><LandingInformation /></Grid> 
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    information: state.informationReducer.information
  }
}


export default connect(mapStateToProps, { fetchInformation })(LandingContainer);