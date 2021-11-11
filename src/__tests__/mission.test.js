import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/MissionList';

describe('Group of Mission tests', () => {
  test('Test if Missions page is rendering correctly', () => {
    const missions = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(missions).toMatchSnapshot();
  });
});
