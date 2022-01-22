import React from 'react';
import burger from '../../assets/icons/humbergur.svg'
import search from '../../assets/icons/Search.svg'
import subImg from '../../assets/images/image-253.svg'
import signIn from '../../assets/icons/Man.svg'

const HeadTop = () => {
  return (
    <div className='container'>
      <div className='left'>
        <div className="sub-left">
          <div className="menu">
            <img src={burger} alt="burger" className="burger" />
            <span className='span'>Sections</span>
          </div>
        </div>
        <div className="search">
          <form>
            <img src={search} alt="Search icon" className="search-icon" />
            <input type="text" placeholder='Search' />
          </form>
        </div>
      </div>
      <div className="right">
        <div className="subcribe">
          <div className="img-content">
            <img src={subImg} alt="Subcribe img" className="subcribe-img" />
          </div>
          <div className="sub-content">
            <span className='span-1'>Subcribe Now</span>
            <span className='span-2'>3 month for $19</span>
          </div>
        </div>
        <div className="signin">
          <img src={signIn} alt="Sign In" className="signin-img" />
          <span>Sign In</span>
        </div>
      </div>
    </div>
  )
};

export default HeadTop;
