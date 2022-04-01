import React from 'react';
import styles from './Contact.module.css';
import ContactItem from './ContactItem/ContactItem';
import icon1 from '../../assets/contact/inst_icon.png';
import icon2 from '../../assets/contact/face_icon.png';
import icon3 from '../../assets/contact/phone_icon.png';


let contactData = [
  {src: `${icon1}`, linkText: 'Inst Link', link:'https://www.instagram.com/v_smokinge_/'},
  {src: `${icon3}`, linkText: 'Phone Number', link:'tel:0954895875'},
  {src: `${icon2}`, linkText: 'FaceBook Link', link:'https://www.facebook.com/'},
  {src: `${icon3}`, linkText: 'Phone Number', link:'tel:0662256851'}
]

let elementContactItem = contactData.
map(el => <ContactItem src={el.src} linkText={el.linkText} link={el.link}/> );

const Contact = () => {
  return (
    <div> 
      <div className={styles.title}>
        <span className='red'>CONTACT</span> PAGE
      </div>
      <div className={styles.content}>
        {elementContactItem}
    </div>
  </div>
  );
}

export default Contact;
