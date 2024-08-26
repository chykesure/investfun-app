import React from 'react';
import './header.css';

function Header() {
  return (
    <header id='header' className='header fixed-top'>
      <div className="header-container">
        <nav className='navbar'>
          <ul className='navbar-nav'>
            <li className='nav-item'><a href="#about" className='nav-link'>About</a></li>
            <li className='nav-item'><a href="#how-to-buy" className='nav-link'>How to buy</a></li>
            <li className='nav-item'><a href="#tokenomics" className='nav-link'>Tokenomics</a></li>
            <li className='nav-item'><a href="#roadmap" className='nav-link'>Roadmap</a></li>
            <li className='nav-item'><a href="#socials" className='nav-link'>Socials</a></li>
          </ul>
        </nav>
        <div className="button-group">
          <a href="#buy" className='btn btn-buy'>Buy IVfun</a>
          <a href="#contact" className='btn btn-contact mobile-only'>DexTools</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
