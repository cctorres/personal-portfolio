import React, { useEffect, useState } from 'react';
import './Side.css';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/icon-linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/icon-github.svg';
import profilePicture from '../../assets/images/img-profile.png';

function Side({ activeMenuSection }) {
  const [prevActiveMenuSection, setPrevActiveMenuSection] = useState(null);

  useEffect(() => {
    if (prevActiveMenuSection !== activeMenuSection && prevActiveMenuSection !== null) {
      const menuItems = document.querySelectorAll('.menu li');

      menuItems.forEach(item => {
        item.classList.remove('active');
      });

      const activeIndex = parseInt(activeMenuSection) - 1;
      if (menuItems[activeIndex]) {
        menuItems[activeIndex].classList.add('active');
      }
    }
    setPrevActiveMenuSection(activeMenuSection);
  }, [activeMenuSection, prevActiveMenuSection]);

  return (
    <div className='side-component'>
      <div className='personal-resume'>
        <img src={profilePicture} alt="Profile"/>
        <h1>Cristian Camilo Torres</h1>
        <h2>Adobe Commerce Developer</h2>
        <h2>Web Developer</h2>
        <p>Provide effective solutions for web pages and e-commerce through good development practices</p>
      </div>
      <nav className="menu">
        <ul>
          <li className='active'><a href="#about">ABOUT</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li><a href="#projects">PROJECTS</a></li>
        </ul>
      </nav>
      <div className='logos'>
        <a href='https://www.linkedin.com/in/cctorres/' target='_blank' rel="noreferrer noopener">
          <LinkedinIcon />
        </a>
        <a href='https://github.com/cctorres' target='_blank' rel="noreferrer noopener">
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}

export default Side;
