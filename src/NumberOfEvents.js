import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value
    });

    this.props.updateEvents(undefined, value);
  };

  render() {
    return (
      <div className='numberOfEvents'>
        <p>Number of Events (1-32):</p>
        <input
          type="number"
          min="1"
          max="32"
          value={this.state.numberOfEvents}
          onChange={this.handleChange}
          onFocus={e => e.target.select()} >
        </input>
      </div>
    );
  }
}

export default NumberOfEvents;