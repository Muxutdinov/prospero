import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <div className='nav-container'>
    <ul className='nav'>
      <li className='nav-items'>
        <Link to="/article" className='nav-item' href="#">News</Link>
      </li>
      <li className='nav-items'><a className='nav-item' href="#">Opinion</a></li>
      <li className='nav-items'><a className='nav-item' href="#">Science</a></li>
      <li className='nav-items'><a className='nav-item' href="#">Life</a></li>
      <li className='nav-items'><a className='nav-item' href="#">Travel</a></li>
      <li className='nav-items'><a className='nav-item' href="#">Moneys</a></li>
      <li className='nav-items'><a className='nav-item' href="#">Art & Design</a></li>
      <li className='nav-items'><a className='nav-item' href="#">Sports</a></li>
      <li className='nav-items'><a className='nav-item' href="#">People</a></li>
      <li className='nav-items'><a className='nav-item' href="#">Health</a></li>
      <li className='nav-items'><a className='nav-item' href="#">Education</a></li>
    </ul>
  </div>;
};

export default Navbar;
