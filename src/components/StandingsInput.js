import React from 'react';
import Box from '@mui/material/Box';

class StandingsInput extends React.Component {

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
    this.props.fetchLeague(this.state.input)
    this.setState({
      input: ''
    });
  };

  render() {
    return(
      <Box className="inputLeague" sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '5vh'
      }}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="user" placeholder="League ID" value={this.state.input} onChange={this.handleChange}/>
          <input type="submit" value="submit"/>
        </form>
      </Box>
    )
  }
}

export default StandingsInput;
