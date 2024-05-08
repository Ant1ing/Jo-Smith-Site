import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src="images/josmith.png" alt="Jo Smith Logo" style={{ width: '50px', height: 'auto' }} />
        </Link>
      </div>
      <button className={`navbar__burger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
      </button>
      <div className={`navbar__links ${isOpen ? 'open' : ''}`}>
        <NavLink exact to="/portfolio" activeClassName="active">Portfolio</NavLink>
        <NavLink exact to="/services" activeClassName="active">Services</NavLink>
        <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
      </div>
      <div className="navbar__button">
        <Link to="/services"><button>See Prices</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;