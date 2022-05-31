import React from 'react';

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
      <div className="inputManager">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="user" placeholder="Manager ID" value={this.state.input} onChange={this.handleChange}/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default ManagerInput;
