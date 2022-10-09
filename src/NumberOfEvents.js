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
      <div>
        <p>Show</p>
        <input
          className='event-number'
          type='text'
          value={this.state.eventNum}
          onChange={this.handleChange}>
        </input>
        <p>Events</p>
      </div>
    );
  }
}

export default NumberOfEvents;