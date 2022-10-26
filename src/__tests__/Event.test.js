import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];

    EventWrapper = shallow(<Event event={event} />);
  });

  test('render a button', () => {
    expect(EventWrapper.find('.details-btn')).toHaveLength(1);
  });

  test('click button to show more', () => {
    EventWrapper.setState({
      showMore: false
    });
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showMore')).toBe(true);
  });

  test('click button to hide', () => {
    EventWrapper.setState({
      showMore: true
    });
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showMore')).toBe(false);
  });

});