import React from 'react';
import styles from './ServicesItem.module.css';


const ServicesItem = (props) => {
  return (
    <div className={styles.item} id={props.id}>
      <img className={styles.img} src={props.img} />
      <p className={styles.text}>
        {props.text}
      </p>
    </div>
  );
}

export default ServicesItem;
