import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h1 className="navbar-brand">Space Traveler's Hub</h1>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/missions">Missions</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
