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

    const moreInfo = <p>More sample information</p>

    return (
      <div>
        <p>Sample date</p>
        <b>Sample summary</b>
        <p>Sample group</p>
        <i>x people are going</i>
        <div>
          {this.state.showMore ? moreInfo : ""}
          <button className="details-button" onClick={() => this.handleDetailsButton()}>
            {this.state.showMore ? "Hide" : "Details"}
          </button>
        </div>
      </div>
    )
  }
}

export default Event;