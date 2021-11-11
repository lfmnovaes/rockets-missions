import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import reducerMissions from '../redux/missions/missions';
import Rockets from '../components/Rockets';
import Missions from '../components/MissionList';
import Profile from '../components/Profile';
import Nav from '../components/Nav';

describe('Group of tests for Rockets page', () => {
  test('renders Rockets component correctly', () => {
    const rockets = renderer
      .create(<Provider store={store}><Rockets /></Provider>)
      .toJSON();
    expect(rockets).toMatchSnapshot();
  });
  test('List is created', () => {
    const { container } = render(<Provider store={store}><Rockets /></Provider>);
    const list = container.querySelector('.rockets-list');
    expect(list).toBeInTheDocument();
  });
  test('renders Profile Rockets correctly', () => {
    const rockets = renderer
      .create(<Provider store={store}><Profile /></Provider>)
      .toJSON();
    expect(rockets).toMatchSnapshot();
  });
});

describe('Group of tests for Missions page', () => {
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
    expect(reducerMissions(undefined, {})).toEqual([]);
  });
});

describe('Group of tests for Profile page', () => {
  test('Test if Profile page is rendering correctly', () => {
    const profile = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(profile).toMatchSnapshot();
  });
});

describe('Test Nav renderisation', () => {
  test('Nav', () => {
    const nav = renderer
      .create(<BrowserRouter><Nav /></BrowserRouter>)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });
});
