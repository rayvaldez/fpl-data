import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    this.props.fetchLeague(this.state.input, this.props.currentGW)
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
        height: '10vh'
      }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            type='number'
            inputMode='numeric'
            pattern='[0-9]'
            size="small"
            id="outlined-basic" 
            label="League ID" 
            variant="outlined" 
            value={this.state.input}
            onChange={this.handleChange}
            inputProps={{ style: { fontSize: 15 }}}
            sx={{
              input: {
                background: "#FAF9F6",
                height: "1.9vh"
              }
            }}
          />          
          <Button 
            variant="contained" 
            type="submit" 
            value="submit"
            size="small"
            sx={{ ml: "1vw" }}
          >Submit</Button>
        </form>
      </Box>
    )
  }
}

export default StandingsInput;
