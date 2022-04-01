import React from 'react';
import styles from './ContactItem.module.css';



const ContactItem = (props) => {
  return (
    <div className={styles.item}>
      <img className={styles.icon} src={props.src} alt="" />
      <a className={styles.link} href={props.link}>{props.linkText}</a>
    </div>
  );
}

export default ContactItem;
