import React, { Component } from 'react';
import { ErrorAlert, WarningAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    infoText: '',
    warningText: ''
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
        infoText: '',
        warningText: ''
      });
    }

  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.numberOfEvents < 1 || this.state.numberOfEvents > 32) {
      this.setState({
        warningText: 'Unable to submit current selection.'
      });
    } else {
      this.setState({
        warningText: ''
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
          <WarningAlert text={this.state.warningText} />
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;