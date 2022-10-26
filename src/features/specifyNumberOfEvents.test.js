import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test('Site loads a default number of events per city.', ({ given, when, then }) => {
    given('the user hasn’t specified a number', () => {
      AppWrapper = mount(<App />);
    });

    when('the user views the page', () => {
      AppWrapper.update();
    });

    then('32 will be the default number of events displayed for that city.', () => {
      expect(AppWrapper.state('numberOfEvents')).toEqual(32);
    });
  });

  test('User can select number of events displayed.', ({ given, when, then }) => {
    given('the user has changed the number of events they want to see', async () => {
      AppWrapper = mount(<App />);
      AppWrapper.update();
      const eventObject = { target: { value: 1 } };
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      await NumberOfEventsWrapper.instance().handleChange(eventObject);
    });

    when('the user views the city page', () => {

    });

    then('the number of events displayed will match the user’s set preferences.', () => {
      expect(AppWrapper.state('events')).toHaveLength(1);
    });
  });
});
