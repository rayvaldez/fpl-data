import React from 'react';

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
      <div className="inputLeague">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="user" value={this.state.input} onChange={this.handleChange}/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default StandingsInput;
