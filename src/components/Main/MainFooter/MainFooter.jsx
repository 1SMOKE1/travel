import React from 'react';
import styles from './MainFooter.module.css'
const MainFooter = () => {
  return (
    <div className={styles.bgc}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.text}>
            We are in business for over 6 years providing amazing services to client
            and people love them to the core. View our story to know more.
          </p>
          <button className={styles.button}>Our Story</button> 
        </div>
      </div>
    </div>
  );
}

export default MainFooter;