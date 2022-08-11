import React from 'react';
import ManagerInput from '../components/ManagerInput';
import Manager from '../components/Manager';
import ManagerGraph from '../components/ManagerGraph';
import { fetchManager } from '../actions/fetchManager';
import { connect } from 'react-redux';

class ManagerContainer extends React.Component {

  render() {
    return (
      <div className="managerContainer">
        <ManagerInput fetchManager={this.props.fetchManager}/>
        <Manager manager={this.props.manager}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    manager: state.managerReducer.manager
  }
}

export default connect(mapStateToProps, {fetchManager})(ManagerContainer);
