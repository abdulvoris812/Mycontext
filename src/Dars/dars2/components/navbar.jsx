import React from 'react';
import "../style/navbar.css"
import "../style/allStye.css"
import Menu from './img/Menu.svg'

const Navbar = () => {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <div className="header-inner">
            <img src={Menu} className="menu"/>
            <a href="../../../../index.html">
              <h3 className='logo'>ALPINE</h3>
            </a>
            <p className='header-text'>Login</p>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Navbar;