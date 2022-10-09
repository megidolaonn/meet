import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render an input box', () => {
    expect(NumberOfEventsWrapper.find('.event-number')).toHaveLength(1);
  });

  test('renders default 32 number input correctly', () => {
    const eventNum = NumberOfEventsWrapper.state('eventNum');
    expect(NumberOfEventsWrapper.find('.event-number').prop('value')).toBe(eventNum);
  });

  test('change state when input changes', () => {
    NumberOfEventsWrapper.setState({
      eventNum: 32
    });
    const eventObject = { target: { value: 16 } };
    NumberOfEventsWrapper.find('.event-number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventNum')).toBe(16);
  });

});