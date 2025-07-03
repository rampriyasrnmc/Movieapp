import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Chill from '../Image/chill1.png'

function Header() {
  return (
    <header className="header">
     <img src={Chill} alt ='chill'/>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/nowplaying">Now Playing</Link>
        <Link to="/toprated">Top Rated</Link>
        <Link to="/search">Search</Link>
      </nav>
    </header>
  );
}

export default Header;
