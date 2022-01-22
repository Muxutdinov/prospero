import React from 'react';
import freedom from '../../assets/images/freedom.png'
import sun from '../../assets/icons/Sun.svg'

const HeadCenter = () => {
  return <div className='head-center'>
    <div className="head-center-left">
      <img src={freedom} alt="Freedom" className="head-center-left-img" />
      <span>Boston and New York Bear Brunt</span>
    </div>
    <div className="head-center-center">
      <h1>Uneversal</h1>
    </div>
    <div className="head-center-right">
      <div className="days">
        Monday, January 1, 2018
      </div>
      <div className="weather">
        <img src={sun} alt="" />
        <span>- 23 °C</span>
      </div>
    </div>
  </div>;
};

export default HeadCenter;
