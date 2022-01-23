import React from 'react';
import './Home.css'
import Header from '../components/Header';
import SectionTwo from '../components/SectionTwo';
import Cards from '../components/Cards';
import Readmore from '../components/Readmore/Readmore'

const Home = () => {
  return <div className='home'>
    <Header />
    <SectionTwo />
    <Readmore/>
    <Cards/>
  </div>;
};

export default Home;
