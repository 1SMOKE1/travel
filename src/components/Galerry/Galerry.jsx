import React from 'react';
import styles from './Galerry.module.css';
import GalerryBlock from './GalerryBlock/GalerryBlock';
import TestimonialBlock from './TestimonialBlock/TestimonialBlock';

const Galerry = () => {
  return (
    <div>
      <div className={styles.title}>
        <span className='red'>GALERY</span> PAGE
      </div>
      <div className={styles.content}>
        <TestimonialBlock />
        <GalerryBlock />
      </div>
    </div>
  );
}

export default Galerry;
