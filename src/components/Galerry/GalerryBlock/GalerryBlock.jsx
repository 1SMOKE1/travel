import React from 'react';
import styles from './GalerryBlock.module.css';
import icon1 from '../../../assets/galerry/icon3.png';
import icon2 from '../../../assets/galerry/icon4.png';
import icon3 from '../../../assets/galerry/icon5.png';
import icon4 from '../../../assets/galerry/icon6.png';
import icon5 from '../../../assets/galerry/icon7.png';
import icon6 from '../../../assets/galerry/icon8.png';



const GalerryBlock = () => {
  return (
    <div className={styles.block}>
      <h1 className={`${styles.title} red`}>Galerry</h1>
      <div className={styles.photoWrap}>
        <img className={styles.icon} src={icon1} alt="" />
        <img className={styles.icon} src={icon2} alt="" />
        <img className={styles.icon} src={icon3} alt="" />
        <img className={styles.icon} src={icon4} alt="" />
        <img className={styles.icon} src={icon5} alt="" />
        <img className={styles.icon} src={icon6} alt="" />
      </div>
    </div>
  );
}

export default GalerryBlock;
