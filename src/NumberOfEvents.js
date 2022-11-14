import React, { Component } from 'react';
import { ErrorAlert, WarningAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    infoText: ''
  };

  handleChange = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: value,
        infoText: 'Please select a number from 1 to 32.'
      });
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: ''
      });
    }

  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.numberOfEvents < 1 || this.state.numberOfEvents > 32) {
      this.setState({
        infoText: 'Unable to submit current selection.'
      });
    } else {
      this.setState({
        infoText: ''
      });
      this.props.updateEvents(undefined, this.state.numberOfEvents);
    }
  }

  render() {
    return (
      <div className='numberOfEvents'>
        <ErrorAlert text={this.state.infoText} />
        <p>Number of Events (1-32):</p>
        <form onSubmit={this.handleSubmit}>
          <input
            className="event-number"
            type="number"
            value={this.state.numberOfEvents}
            onChange={this.handleChange} >
          </input>
          <input type="submit" value="Submit"></input>
        </form>
        <div>
          <WarningAlert text={(navigator.onLine) ? '' : 'Offline. Loading cached events.'} />
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;