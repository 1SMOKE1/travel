import React from 'react';
import styles from './Home.module.css';
import HomeItem from './HomeItem/HomeItem.jsx';

let homeData = [
  {cardName: 'Starter',
   cost: 'free', 
   text: `Free Service
   Multiple Accounts
   Management No
   --
   --`,
   butText: 'Try'},
  {cardName: 'Buisiness',
   cost: '$97',
   text: `Free Service
   Multiple Accounts
   Management No
   Unlimited Data
   --`,
   butText: 'Sign Up'},
   {cardName: 'Professional',
    cost: '$297',
    text: `Free Service
    Multiple Accounts
    Management No
    Unlimited Data
    Whatever You Need`,
    butText: 'Sign Up'}
]

let elementHomeItem = homeData
.map (el => <HomeItem cardName={el.cardName} cost={el.cost} text={el.text} butText={el.butText}/>)

const Home = () => {
  return (
    <div>
      <div className={styles.title}>
        <span className='red'>HOME</span> PAGE
      </div>
      <div className={styles.content}>
        {elementHomeItem}
      </div>
    </div>
  );
}

export default Home;
