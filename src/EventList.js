import React, { Component } from 'react';
import Event from './Event';
import { mockData } from './mock-data';

class EventList extends Component {
  render() {
    const { events } = this.props;
    const mockDataArray = mockData;

    return (
      <ul className="EventList">
        {events.slice(0, 32).map(event =>
          <li className="event" key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;