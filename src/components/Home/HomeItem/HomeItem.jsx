import React from 'react';
import styles from './HomeItem.module.css'

const HomeItem = (props) => {
  return (
    <div className={styles.item}>
      <h5 className={styles.cardName}>{props.cardName}</h5>
      <h1 className={`${styles.cost} red`}>{props.cost}</h1>
      <p className={`${styles.info} ${styles.breakingLine}`}>
        {props.text}
      </p>
      <button className={styles.button}>{props.butText}</button>
    </div>
  );
}

export default HomeItem;
