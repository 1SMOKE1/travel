import React from 'react';
import styles from './Main.module.css';
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Services from '../Services/Services';
import Galerry from '../Galerry/Galerry';
import Contact from '../Contact/Contact';
import MainFooter from './MainFooter/MainFooter';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <Routes>
          <Route exact path='/*' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/galerry' element={<Galerry/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      <MainFooter />
    </main>
  );
}

export default Main;
