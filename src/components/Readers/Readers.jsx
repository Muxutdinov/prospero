import React from 'react';
import './Readers.css'
import reader2 from '../../assets/images/reader-2.svg'
import reader3 from '../../assets/images/reader-3.svg'
import button from '../../assets/images/readers-button.svg'
import piano from '../../assets/images/piano.svg'

const Readers = () => {
  return <div className='ReadersWrapper'>
  <div className='Readers'>
    <div className="ReadersLeft">
      <div className="hot">
        <div className='hott'>
        Hot
        </div>
      </div>
      <div className="ReadersImage">
        <img src={reader2} alt='img'/> 
        <div className="readersLeftSarah">
          By Sarah Jenkins
        </div>
        <div className="SarahText">
          Photographer
        </div>
      </div>
      <div className="ReadersTitle">
        Readers' Choice winners: Your wine country favorites
      </div>
      <div className="ReadersButton">
        <img src={button} alt='img'/>
      </div>
      <div className="Piano">
        <img src={piano} alt='img'/>
      </div>
    </div>
    <div className="ReadersRight">
      <div className="ReadersRightTop">
      <div className="ReadersTopLeft">
        <div className="careers">Careers</div>
        <div className="readersTopTitle">Had a Job interview but No Callback? Here's What to Do</div>
        <div className="readersTopText">Try to understand the culture of the campany where you want to work and be authentic in your 
        interview, experts emphasize</div>
        <div className="readersTopButton">
          <div className="redbtn">
          Read more
          </div>
          </div>
      </div>
      <div className="ReadersTopRight">
        <img src={reader3}alt='img' />
      </div>
      </div>
      <div className="ReadersRightButtom">
        <div className="ButtonLeft">
          <div className="ButtonLeftTitle">Is Coffee Bad For Banes?</div>
          <div className="ButtonLeftText">Coffee drinkers may excrete more calcium, but it doesn't appear to weaken bones</div>
          <div className="ButtonLeftdate">Oct 15</div>
        </div>
        <div className="ButtonLeft">
          <div className="ButtonLeftTitle">What We Manufacture</div>
          <div className="ButtonLeftText">A global history of the factory and the modern world that all should read</div>
          <div className="ButtonLeftdate">Oct 14</div>
        </div>
      </div>

    </div>
  </div>
  </div>
};

export default Readers;
