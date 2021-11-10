import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Nav from './components/Nav.js';
import Rockets from './components/Rockets.js';
import Missions from './components/Missions.js';
import Profile from './components/Profile.js';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Rockets />} exact />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
