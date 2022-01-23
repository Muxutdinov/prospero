import React from 'react';
import Header from '../components/Header';
import SectionTwo from '../components/SectionTwo';
import Cards from '../components/Cards';
import Readmore from '../components/Readmore/Readmore'

const Home = () => {
  return <div>
    <Header />
    <SectionTwo />
    <Readmore/>
    <Cards/>
  </div>;
};

export default Home;
