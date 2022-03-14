import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Nav from './components/Nav';
import Rockets from './components/Rockets';
import Missions from './components/MissionList';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Nav />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Rockets />} exact />
          <Route path="missions" element={<Missions />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </div>
);

export default App;
