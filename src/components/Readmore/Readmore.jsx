import React from 'react';
import './Readmore.css'
import Arrow from '../../assets/icons/Arrow.svg'

const Readmore = () => {
  return <div className='readmore'>
       <div className='ReadmoreTitle'>
           The big Bloom or "How Flowering Plants Changed the World"
       </div>
       <div className='readmorebutton'>
           <div className='readmoreText'>
           Read more
               </div> <img src={Arrow} />
       </div>
  </div>;
};

export default Readmore;
