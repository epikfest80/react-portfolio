import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <nav className="nav-container">
        <div className="nav-logo">Портфоліо</div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><NavLink to="/" onClick={closeMenu}>Головна</NavLink></li>
          <li><NavLink to="/contacts" onClick={closeMenu}>Контакти</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;