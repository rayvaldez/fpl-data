import React from 'react';
import { fetchInformation } from '../actions/fetchInformation';
import { connect } from 'react-redux';

class LandingContainer extends React.Component {

  componentDidMount() {
    this.props.fetchInformation();
  }
  
  render() {   
    return (
      <div className="landingContainer">
        Landing Container
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    information: state.informationReducer.info
  }
}

export default connect(mapStateToProps, {fetchInformation})(LandingContainer);