import React from 'react';
import styles from './TestimonialBlock.module.css'
import icon1 from '../../../assets/galerry/icon1.png';
import icon2 from '../../../assets/galerry/icon2.png';



const TestimonialBlock = (props) => {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>Testimonial</h1>
      <div className={styles.messageWrap}>
        <p className={styles.text}>
          I have been involved with this comapny 
          for ages and just want to say this is a 
          great work by designcoon.<br/><br/>
          <span className='red'>DJ Bravo - Frequent Travelera</span>
        </p>
        <div>
          <img className={styles.icon} src={icon1} alt="" />
        </div>
      </div>
      <div className={styles.messageWrap}>
        <p className={styles.text}>
          I have been involved with this comapny 
          for ages and just.<br/><br/>
          <span className='red'>DJ Bravo - Frequent Travelera</span>
        </p>
        <img className={styles.icon} src={icon2} alt="" />
      </div>
    </div>
  );
}

export default TestimonialBlock;
