import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../imgs/planet.png';

// className="navbar navbar-expand-lg navbar-light bg-light"

const Nav = () => (
  <Navbar expand="lg" bg="light">
    <Container fluid>
      <Navbar.Brand>
        <img
          alt="Space Travelers logo"
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />
        {' '}
        Space Traveler&apos;s Hub
      </Navbar.Brand>
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
    </Container>
  </Navbar>
);

export default Nav;
