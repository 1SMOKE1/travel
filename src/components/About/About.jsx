import React from 'react';
import styles from './About.module.css';
import Photo from '../../assets/about/img_travel.jpg';

const About = () => {
  return (
    <div>
      <div className={styles.title}>
        <span className='red'>ABOUT</span> PAGE
      </div>
      <div className={styles.content}>
        <img className={styles.img} src={Photo} alt="" />
        <p className={styles.text}>
          <span className='red'>Travel is life!</span><br/><br/>
          We work to make your travels more interesting, more exciting.<br/>
          Even the shortest trip can be turned into a fairy tale.<br/><br/>

          Each country has its own <span className='red'>"highlights"</span> and we are ready to show them to you in the best way, providing comfort and safety.<br/>
          Traveling with us is very fun and interesting.<br/><br/>

          Give yourself new, unforgettable <span className='red'>emotions</span>!!!
        </p>
      </div>
    </div>
  );
}

export default About;
