// import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src="images/josmith.png" alt="Jo Smith Logo" style={{ width: '50px', height: 'auto' }} />
        </Link>
      </div>
      <div className="navbar__links">
        <NavLink exact to="/portfolio" activeClassName="active">Portfolio</NavLink>
        <NavLink exact to="/services" activeClassName="active">Services</NavLink>
        <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
      </div>
      <div className="navbar__button">
        <button>See Prices</button>
      </div>
    </nav>
  );
}

export default Navbar;