import React from 'react';
import ManagerInput from '../components/Manager/ManagerNextFiveManagerInput';
import Manager from '../components/Manager/Manager';
import ManagerGraph from '../components/Manager/ManagerGraph';
import ManagerNextFive from '../components/Manager/ManagerNextFive';
import { fetchManager } from '../actions/fetchManager';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';

class ManagerContainer extends React.Component {

  render() {

    console.log(this.props)
    return (
      <Box sx={{
        minHeight: '100vh',
        backgroundColor: '#151515'
      }}>
        <ManagerInput fetchManager={this.props.fetchManager} gameweek={this.props.information.currentGW}/>
        <Manager manager={this.props.manager}/>
        <ManagerNextFive fixtures={this.props.information.fixtures} currentGW={this.props.information.currentGW} manager={this.props.manager}/>
        <ManagerGraph manager={this.props.manager}/> 
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return {
    manager: state.managerReducer.manager,
    information: state.informationReducer.information
  }
}

export default connect(mapStateToProps, {fetchManager})(ManagerContainer);
