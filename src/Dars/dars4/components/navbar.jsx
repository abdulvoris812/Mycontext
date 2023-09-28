import React from 'react';
import '../style/navbar.css';
import Logo from '../images/logo.svg';
import Line from '../images/nav-line.svg';
import Search from '../images/search.svg';

const Nav = () => {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <div className="header-inner">
            <div className="nav">
              <ul className='nav-list'>
                <li className='nav-item'><a href="#">About</a></li>
                <li className='nav-item'><a href="#">Contact</a></li>
              </ul>
              <a href="../../../../index.html">
                <img src={Logo} alt="logo" className='logo'/>
              </a>
              <ul className='nav-list'>
                <li className='nav-item'><a href="#">Sign In</a></li>
                <li className='nav-item'><a href="#">Sign Up</a></li>
                <a href="#">
                  <img src={Search} alt="search" className='search'/>
                </a>
              </ul>
            </div>
            <img src={Line} alt="line" className='line'/>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Nav;