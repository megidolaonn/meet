import React, { Component } from 'react';

class Event extends Component {

  state = {
    showMore: false
  }

  handleDetailsButton = () => {
    this.setState({
      showMore: !this.state.showMore
    });
  }

  render() {
    const { event } = this.props;

    const moreInfo = <div>
      <br></br>
      <p>Event Description:</p>
      <p className='event__Details' >{event.description}</p>
    </div>

    return (
      <div>
        <b>{event.summary}</b>
        <br></br>
        <p>{event.start.dateTime}</p>
        <p>Time zone: {event.start.timeZone}</p>
        <div>
          {this.state.showMore ? moreInfo : ""}
          <button className="details-btn" onClick={() => this.handleDetailsButton()}>
            {this.state.showMore ? "Hide" : "Details"}
          </button>
        </div>
      </div>
    )
  }
}

export default Event;