import React from 'react';
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const isActiveLink = () => link => link.isActive? styles.active : styles.link  

const Nav = () => {
  return (
    <nav>
      <NavLink className={isActiveLink()} to='/home'>HOME</NavLink>
      <NavLink className={isActiveLink()} to='/about'>ABOUT</NavLink>
      <NavLink className={isActiveLink()} to='/services'>SERVICES</NavLink>
      <NavLink className={isActiveLink()} to='/galerry'>GALERRY</NavLink>
      <NavLink className={isActiveLink()} to='/contact'>CONTACT</NavLink>
    </nav>
  );
}

export default Nav;
