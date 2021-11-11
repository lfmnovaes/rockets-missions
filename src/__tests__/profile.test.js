import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../components/Profile';

describe('Group of Profile tests', () => {
  test('Test if Profile page is rendering correctly', () => {
    const missions = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(missions).toMatchSnapshot();
  });
});
