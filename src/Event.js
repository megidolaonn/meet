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

    const moreInfo = <p className='event__Details' >More sample information</p>

    return (
      <div>
        <p>{event.start.dateTime}</p>
        <b>{event.summary}</b>
        <p>{event.organizer.email}</p>
        <i>x people are going</i>
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