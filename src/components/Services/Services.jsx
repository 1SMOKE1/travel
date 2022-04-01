import React from 'react';
import styles from './Services.module.css';
import ServicesItem from './ServicesItem/ServicesItem.jsx';
import shape1 from './../../assets/main/content/shape1.png';
import shape2 from './../../assets/main/content/shape2.png';
import shape3 from './../../assets/main/content/shape3.png';
import shape4 from './../../assets/main/content/shape4.png';


let servicesItemData = [
  {img: `${shape1}`, id: 1, text: `Making your trip\n beautiful and easier` },
  {img: `${shape2}`, id: 2, text: `Tools to help you\n succeed tommorow`},
  {img: `${shape3}`, id: 3, text: `Ideas that will blow\n you out the blue.`},
  {img: `${shape4}`, id: 4, text: `Navigate your path\n to beautiful world.`}
]

let elementServices = servicesItemData
.map(el => <ServicesItem id={el.id} text={el.text} img={el.img}/>)

const Services = () => {
  return (
    <div>
      <div className={styles.title}>
        <span className='red'>Our</span> Services
      </div>
      <div className={styles.content}>
        {elementServices}
      </div>
    </div>
  );
}

export default Services;
