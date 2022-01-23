import React from 'react';
import './index.css'
import Card from './Card-1/Card';
import Cardikki from './Card-2/Card';
import Carduch from './Card-3/Card';
import Cardtort from './Card-4/Card';
import Cardbesh from './Card-5/Card';
import Cardolti from './Card-6/Card';
import VertiCard from './VerttikalCard/VertiCard';

const Cards = () => {
  return <div className='cardsContainer'>
    <div>
    <Card/>
  <div className='Border'></div>
    <Cardikki/>
  <div className='Border'></div>
    <Carduch/>
  <div className='Border'></div>
  <Cardtort/>
  <div className='Border'></div> 
  <Cardbesh/>
  <div className='Border'></div>
  <Cardolti/>
    </div>
    <div>
      <VertiCard/>
    </div>
  </div>;
};

export default Cards;
