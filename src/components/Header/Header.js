import React from 'react';
import './Header.css';
import { ReactComponent as SunIcon } from 'assets/icons/icon-sun.svg';
import { ReactComponent as MoonIcon } from 'assets/icons/icon-moon.svg';
import logo from 'assets/images/logo.png';

function Header({ toggleTheme, isDarkTheme }) {
  return (
    <header>
      <div className='header-content'>
        <img src={logo} alt='logo'/>
        <div className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? <MoonIcon className="icon" /> : <SunIcon className="icon" />}
        </div>
      </div>
    </header>
  );
}

export default Header;
