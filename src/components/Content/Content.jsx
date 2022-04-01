import React from 'react';
import styles from './Content.module.css'
import Form from './Form/Form';

const Content = () => {
  return (
    <div className={styles.contentWrap}>
      <div>
        <h1 className={styles.title}><span className={styles.first}>TRAVEL IS</span> BEAUTIFUL</h1>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and<br/>
          typesetting industry. Lorem Ipsum has been the<br/>
          industry's standard dummy text ever since the 1500s<br/>
        </p>
      </div>
      <Form />
    </div>
  );
}

export default Content;
