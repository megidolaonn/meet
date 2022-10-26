import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test('Site loads a list of events which can be expanded to show more details.', ({ given, when, then }) => {
    given('the list of events has been loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user scrolls through the page', () => {

    });

    then('each event element shown will be collapsed by default.', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event event__Details')).toBeUndefined;
    });
  });

  test('More details shown when the user clicks a button on the event.', ({ given, when, then }) => {
    given('the user hasn’t expanded an event', () => {
      AppWrapper = mount(<App />);
      expect(AppWrapper.find('.event event__Details')).toBeUndefined;

    });

    when('the user clicks the “show details” button', () => {
      AppWrapper.update();
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
    });

    then('the event element will be expanded.', () => {
      expect(AppWrapper.find('.event event__Details')).toBeDefined;
    });
  });

  test('User can hide the extra information of an event.', ({ given, when, then }) => {

    given('the user has expanded an event', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
      expect(AppWrapper.find('.event event__Details')).toBeDefined;
    });

    when('the user clicks the “hide details” button', () => {
      AppWrapper.update();
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
    });

    then('the event element will be collapsed.', () => {
      expect(AppWrapper.find('.event event__Details')).toBeUndefined;
    });
  });
});