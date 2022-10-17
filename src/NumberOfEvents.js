import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    eventNum: 32
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ eventNum: value });
  };

  render() {
    return (
      <div className='numberOfEvents'>
        <p>Number of Events:</p>
        <input
          type='text'
          value={this.state.eventNum}
          onChange={this.handleChange}>
        </input>
      </div>
    );
  }
}

export default NumberOfEvents;