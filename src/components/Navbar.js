import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="navbar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/standings">Standings</Link>
        <Link to="/manager">Manager</Link>
      </nav>
    </div>
  )
}

export default Navbar;
