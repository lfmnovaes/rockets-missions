import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/cofigureStore';

import '@testing-library/jest-dom';
import Rockets from '../components/Rockets';
import Profile from '../components/Profile';

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
