import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <h1 className="navbar-brand">Space Traveler&apos;s Hub</h1>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">Rockets</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/missions" className="nav-link">Missions</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/profile" className="nav-link">My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
