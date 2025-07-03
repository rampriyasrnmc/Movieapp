import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/now-playing">Now Playing</Link></li>
        <li><Link to="/top-rated">Top Rated</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
