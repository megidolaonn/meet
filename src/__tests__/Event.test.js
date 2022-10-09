import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render a button', () => {
    expect(EventWrapper.find('.details-button')).toHaveLength(1);
  });

  test('click button to show more', () => {
    EventWrapper.setState({
      showMore: false
    });
    EventWrapper.find('.details-button').simulate('click');
    expect(EventWrapper.state('showMore')).toBe(true);
  });

  test('click button to hide', () => {
    EventWrapper.setState({
      showMore: true
    });
    EventWrapper.find('.details-button').simulate('click');
    expect(EventWrapper.state('showMore')).toBe(false);
  });





});