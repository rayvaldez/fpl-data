import React from 'react';
import ManagerInput from '../components/ManagerInput';
import Manager from '../components/Manager';
import ManagerGraph from '../components/ManagerGraph';
import { fetchManager } from '../actions/fetchManager';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';

class ManagerContainer extends React.Component {

  render() {
    return (
      <Box sx={{
        minHeight: '100vh',
        backgroundColor: '#151515'
      }}>
        <ManagerInput fetchManager={this.props.fetchManager}/>
        <Manager manager={this.props.manager}/>
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return {
    manager: state.managerReducer.manager
  }
}

export default connect(mapStateToProps, {fetchManager})(ManagerContainer);
