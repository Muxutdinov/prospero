import React from 'react';
import imgOne from '../../assets/images/image-1.png'
import imgTwo from '../../assets/images/image-2.png'
import imgThree from '../../assets/images/image-3.png'
import imgFour from '../../assets/images/image-4.png'
import usr from '../../assets/images/card-usr.png'
import play from '../../assets/icons/play.svg'

const Card = () => {
  return <div className='card-container'>
    <div className="card">

      <div className="box">

        <div className="title">
          25 Songs That Tell Us Where Music Is Going
        </div>
        <img src={imgOne} alt="pic one" className="img" />
      </div>

      <div className="box">
        <div className="title">
          These Ancient Assassins Eat Their Own Kind
        </div>
        <img src={imgTwo} alt="pic one" className="img" />
      </div>

      <div className="box">
        <div className="title">
          How Do You Teach People to Love Difficult Music?
        </div>
        <img src={imgThree} alt="pic one" className="img" />
      </div>

      <div className="box">
        <div className="title">
          International Soccer’s Man of Mystery
        </div>
        <img src={imgFour} alt="pic one" className="img" />
      </div>
    </div>

    <div className="big-card">

      <div className="card-left">
        <div className="card-left-top">
          <img src={usr} alt="User pic" className="usr" />
          <div className='usrInfo'>
            <span className='user-name'>By Benjamin Turner</span>
            <span className='user-work'>Traveler</span>
          </div>
        </div>
        <div className="card-left-bottom">
          <div className="card-left-bottom-title">
            Destinations
          </div>
          <div className="card-left-bottom-desc">
            In Southeast England, White Cliffs and Fish
          </div>

          <div className="card-left-bottom-play">
            <div className="btn">Read more </div>
            <div className="play-sec">
              <div className="circle">
                <img src={play} alt="" className="play" />
              </div>
              <div className="track">
                <div className="track-name">
                  The chalk cliff of Beachy Head
                </div>
                <div className="track-clock">
                  18:05
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card-right">Left Card</div>
    </div>
  </div>;
};

export default Card;
