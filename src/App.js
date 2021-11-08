import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

const App =()=> (
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
