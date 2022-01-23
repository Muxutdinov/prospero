import React from 'react';
import Left from './Left';
import Right from './Right';
import './style.css'

const SectionTwo = () => {
  return <div className='section-body'>
    <div className="section-container">
      <Left />
      <Right />
    </div>
  </div>;
};

export default SectionTwo;
