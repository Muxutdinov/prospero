import React from 'react';
import HeadBody from './HeadBody';
import HeadCenter from './HeadCenter';
import HeadTop from './HeadTop';
import './style.css'

const Header = () => {
  return <div>
    <HeadTop />
    <HeadCenter />
    <HeadBody />
  </div>;
};

export default Header;
