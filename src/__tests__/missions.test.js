import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import reducer from '../redux/missions/missions';
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
  test('Check the initialState of the reducer', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
});
