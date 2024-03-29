import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    this.props.fetchManager(this.state.input, this.props?.gameweek - 1)
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
        height: '10vh'
      }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            size="small"
            id="outlined-basic" 
            label="Manager ID" 
            variant="outlined" 
            value={this.state.input}
            onChange={this.handleChange}
            inputProps={{ style: { fontSize: 15 }}}
            sx={{
              input: {
                background: "#e0e0e0"
              }
            }}
          />
          <Button 
            variant="contained" 
            type="submit" 
            value="submit"
            size="medium"
            sx={{ ml: "1vw" }}
          >Submit</Button>
        </form>
      </Box>
    )
  }
}

export default ManagerInput;
