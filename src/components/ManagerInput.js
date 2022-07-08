import React from 'react';
import Box from '@mui/material/Box';

class ManagerInput extends React.Component {

  state = {
    input: ''
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('fetching')
    this.props.fetchManager(this.state.input)
    this.setState({
      input: ''
    });
  };

  render() {
    return (
      <Box className="inputManager" sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '5vh'
      }}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="user" placeholder="Manager ID" value={this.state.input} onChange={this.handleChange}/>
          <input type="submit" value="submit"/>
        </form>
      </Box>
    )
  }
}

export default ManagerInput;
