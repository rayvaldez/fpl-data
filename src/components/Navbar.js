import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StandingsContainer from '../containers/StandingsContainer';
import ManagerContainer from '../containers/ManagerContainer';
import App from '../App';

const Navbar = () => {

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/standings">Standings</Link>
        </li>
        <li>
          <Link to="/manager">Manager</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
