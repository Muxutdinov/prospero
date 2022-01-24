import React from 'react';
import usrImg from '../../assets/images/prospero-img.png'
import comment from '../../assets/icons/Comment.svg'
import car from '../../assets/images/car.png'
import heart from '../../assets/icons/Heart.svg'
import quote from '../../assets/images/quote.png'
import users1 from '../../assets/images/users-1.png'
import users2 from '../../assets/images/users-2.png'
import users3 from '../../assets/images/users-3.png'

const GridCard = () => {
  return <div className='card-container'>
    <div class="boxs box-1">
      <div className="top-boxs">
        <div className="top-boxs-left">
          <div className="top-boxs-left-title">Cars</div>
          <div className="top-boxs-left-sum">
            The joy of replicas: A $ 5 million car for $ 50,000
          </div>
          <div className="top-boxs-left-desc">
            The 31-year-old self-taught engineer and former amateur racer spends his days building artful recreations of one of most iconic sports cars
          </div>
        </div>
        <div className="top-boxs-right">
          <img src={car} alt="Car pic" />
        </div>
      </div>
      <div className="bottom-boxs">
        <img width={30} height={30} src={usrImg} alt="User pic" />
        <b style={{ fontSize: '12px' }} >Jessica Miller:</b>
        <span style={{ fontSize: '12px' }} >Even as the ride-hailing service’s future remem…</span>
        <img style={{ marginLeft: '5px' }} src={comment} alt="Comment pic." />
        <span style={{ fontSize: '12px' }} >342</span>
      </div>
    </div>
    <div class="boxs box-2">
      <div className="box-two-btn">Popular</div>
      <div className="box-two-bottom">
        <div className="box-two-bottom-title">Art & Design</div>
        <div className="box-two-bottom-desc">
          Invisible ink: the weird world of tattoo removal – in pictures
        </div>
        <div className="box-bottom-group">
          <img src={usrImg} alt="User pic" />
          <div className="box-bottom-group-info">
            <div className="box-bottom-group-info-name">
              By Sarah Jenkins
            </div>
            <div className="box-bottom-group-info-group">
              <span style={{ marginLeft: 0 }}>Sept 26</span>
              <img src={comment} alt="Comment pic" />
              <span>16</span>
              <img src={heart} alt="Heart pic" />
              <span>832</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="boxs box-3">
      <div className="box-three-top">
        <span>Columns</span>
      </div>
      <div className="box-three-center">
        <div className="box-three-center-boxs">
          <img className='quote' src={quote} alt="Quote pic." />
          <div className="box-three-center-boxs-desc">
            Architecture is the thoughtful making of space
          </div>
          <div className="box-three-center-boxs-group">
            <img style={{ marginRight: '10px' }} src={users1} alt="users 1" />
            <div>
              <div className="name">David Williams</div>
              <div className="work">Architect</div>
            </div>
          </div>
        </div>

        <div className="box-three-center-boxs">
          <img className='quote' src={quote} alt="Quote pic." />
          <div className="box-three-center-boxs-desc">
            The details are not the details. They make the design.
          </div>
          <div className="box-three-center-boxs-group">
            <img style={{ marginRight: '10px' }} src={users2} alt="users 1" />
            <div>
              <div className="name">Alexandra Green</div>
              <div className="work">Interior designer</div>
            </div>
          </div>
        </div>

        <div style={{ borderBottom: 0 }} className="box-three-center-boxs">
          <img className='quote' src={quote} alt="Quote pic." />
          <div className="box-three-center-boxs-desc">
            Live life to the fullest, and focus on the positive
          </div>
          <div className="box-three-center-boxs-group">
            <img style={{ marginRight: '10px' }} src={users3} alt="users 1" />
            <div>
              <div className="name">Olivia Thompson</div>
              <div className="work">Coacher</div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-three-bottom">
        <span>Read more</span>
      </div>
    </div>
    <div class="boxs box-4">
      <div className="box-four"></div>
      <div className="box-four-text">
        200+ Doomed Cats Saved From Euthanization
      </div>
    </div>
    <div class="boxs box-blog ">
      <div className="box-blog-title">
        Is Coffee Bad for Bones?
      </div>
      <div className="box-blog-desc">
        Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones
      </div>
      <div className="box-blog-date">Oct 15</div>
    </div>
    <div class="boxs box-blog ">
      <div className="box-blog-title">
        What We Manufacture
      </div>
      <div className="box-blog-desc">
        A global history of the factory and the modern world that all should read
      </div>
      <div className="box-blog-date">Oct 14</div>
    </div>
    <div class="boxs box-blog ">
      <div className="box-blog-title">
        It’s a Stressful World
      </div>
      <div className="box-blog-desc">
        Can a cruise skeptic enjoy four days on the seas with his family and a bunch of princesses?
      </div>
      <div className="box-blog-date">Oct 14</div>
    </div>
    <div class="boxs box-blog ">
      <div className="box-blog-title">
        A Treat for Lemon Lovers
      </div>
      <div className="box-blog-desc">
        This tangerine, ginger and chocolate tart has verve, depth and a hint of spice
      </div>
      <div className="box-blog-date">Oct 13</div>
    </div>
  </div>;
};

export default GridCard;
