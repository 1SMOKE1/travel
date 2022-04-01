import React from 'react';
import styles from  './Footer.module.css'
import Logo from '../Header/Logo/Logo';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.text}>All Rights Reserved |  2016  |  Designed with love by DesignCoon</p>
          <Logo />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
