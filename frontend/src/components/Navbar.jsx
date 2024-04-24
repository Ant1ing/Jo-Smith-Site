// import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <img src="images/josmith.png" alt="Jo Smith Logo" style={{ width: '50px', height: 'auto' }} />
          </Link>
        </div>
        <div className="navbar__links">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="navbar__button">
          <button>See Prices</button>
        </div>
      </nav>
    );
}

export default Navbar;  