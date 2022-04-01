import React from 'react';
import styles from './Form.module.css'

const Form = () => {
  return (
    <form className={styles.form}>
      <h4 className={styles.title}>REQUEST A QUOTE</h4>
      <input className={styles.input} type='text' placeholder='Full Name'/>
      <input className={styles.input} type='text' placeholder='Email Adress'/>
      <input className={styles.input} type='text' placeholder='Phone Number'/>
      <input className={styles.input} type='text' placeholder='Country'/>
      <div className={styles.checkWrap}>
        <input type='checkbox' id='ch' className={styles.checkbox}/>
        <label className={styles.label} htmlFor="ch">I accept the terms & conditions</label>
      </div>
      <button className={styles.button}>
        SEND
      </button>
    </form>
  );
}

export default Form;
