import React from 'react';
import './Footer.css'
import Symbol from '../../assets/icons/Symbol.svg'
import icon1 from '../../assets/icons/face.svg'
import icon2 from '../../assets/icons/insta.svg'
import icon3 from '../../assets/icons/tvt.svg'
import icon4 from '../../assets/icons/you.svg'

const Footer = () => {
  return <div className="FooterWrapper">
  <div className='Footer'>
      <div className="FooterTop">
          <div className="FooterTopTitle">
              Subscribe now and get 20% off
          </div>
          <div className="FooterTopInputBtn">
              <input type='text' placeholder='Enter your email' className="FooterTopInput">
              </input>
              <div className="FooterTopBtn">
                  <div className="FooterTopBtnText">
                  Subscribe
                  </div>
              </div>
          </div>
      </div>
      <div className="FooterMiddle">
          <div className="FooterMiddleBorder">
              <div className="FooterMiddleBorderItem1"></div>
              <div className="FooterMiddleBorderItem2"></div>
              <div className="FooterMiddleBorderItem3"></div>
              <div className="FooterMiddleBorderItem4"></div>
              <div className="FooterMiddleBorderItem5"></div>
              <div className="FooterMiddleBorderItem6"></div>
          </div>
          <div className="FotterMiddleMean">
              <div className="FotterMiddleMeanItem">
                  <div className="FotterMiddleMeanItemTitle">News</div>
                  <div className="FotterMiddleMeanItemTextWrapper">
                      <div className="FotterMiddleMeanItemText">Nation</div>
                      <div className="FotterMiddleMeanItemText">World</div>
                      <div className="FotterMiddleMeanItemText">Politics</div>
                      <div className="FotterMiddleMeanItemText">Solar Eclipse</div>
                  </div>
              </div>
              <div className="FotterMiddleMeanItem">
              <div className="FotterMiddleMeanItemTitletest1">Arts</div>
                  <div className="FotterMiddleMeanItemTextWrapper">
                      <div className="FotterMiddleMeanItemText">Art & Design</div>
                      <div className="FotterMiddleMeanItemText">Movies</div>
                      <div className="FotterMiddleMeanItemText">People</div>
                      <div className="FotterMiddleMeanItemText">Video:Arts</div>
                      <div className="FotterMiddleMeanItemText">Theater</div>
                  </div>
              </div>
              <div className="FotterMiddleMeanItem">
              <div className="FotterMiddleMeanItemTitletest2">Travel</div>
                  <div className="FotterMiddleMeanItemTextWrapper">
                      <div className="FotterMiddleMeanItemText">Destination</div>
                      <div className="FotterMiddleMeanItemText">Flights</div>
                      <div className="FotterMiddleMeanItemText">Business Travel</div>
                  </div>
              </div>
              <div className="FotterMiddleMeanItem">
              <div className="FotterMiddleMeanItemTitletest3">Sports</div>
                  <div className="FotterMiddleMeanItemTextWrapper">
                      <div className="FotterMiddleMeanItemText">Olympics</div>
                      <div className="FotterMiddleMeanItemText">Motor Sports</div>
                      <div className="FotterMiddleMeanItemText">Volleyball</div>
                      <div className="FotterMiddleMeanItemText">MMA</div>
                      <div className="FotterMiddleMeanItemText">Cycing</div>
                  </div>
              </div>
              <div className="FotterMiddleMeanItem">
              <div className="FotterMiddleMeanItemTitle">Tech</div>
                  <div className="FotterMiddleMeanItemTextWrapper">
                      <div className="FotterMiddleMeanItemText">Tech</div>
                      <div className="FotterMiddleMeanItemText">Tech Columnists</div>
                      <div className="FotterMiddleMeanItemText">Tech Reviews</div>
                      <div className="FotterMiddleMeanItemText">Talking Tech</div>
                  </div>
              </div>
              <div className="FotterMiddleMeanItem">
              <div className="FotterMiddleMeanItemTitletest4">Moneys</div>
                  <div className="FotterMiddleMeanItemTextWrapper">
                      <div className="FotterMiddleMeanItemText">Markets</div>
                      <div className="FotterMiddleMeanItemText">Business</div>
                      <div className="FotterMiddleMeanItemText">Personal Finance</div>
                      <div className="FotterMiddleMeanItemText">Retirement</div>
                      <div className="FotterMiddleMeanItemText">Careers</div>
                  </div>
              </div>
          </div>
      </div>
      <div className="FooterButton">
          <div className="FooterButtonFirst">
              <div className="FooterButtonFirstBtn"></div>
              <div className='FooterButtonBtnMiddle'>
                <div className="FooterButtonBtnMiddleLeft">
                    <img src={Symbol} className="FooterButtonBtnMiddleLeftIcon"></img>
                    <div className="FooterButtonBtnMiddleLeftItem">Contact us</div>
                    <div className="FooterButtonBtnMiddleLeftItem">Contact us</div>
                    <div className="FooterButtonBtnMiddleLeftItem">Contact us</div>
                    <div className="FooterButtonBtnMiddleLeftItem">Contact us</div>
                </div>
                <div className="FooterButtonBtnMiddleRight">
                    <img src={icon1} className="FooterButtonBtnMiddleRightItem"></img>
                    <img src={icon3} className="FooterButtonBtnMiddleRightItem"></img>
                    <img src={icon4} className="FooterButtonBtnMiddleRightItem"></img>
                    <img src={icon2} className="FooterButtonBtnMiddleRightItem"></img>
                </div>
              </div>
              <div className="FooterButtonFirstBtn"></div>
          </div>
          <div className="FooterButtonSecond">
              <div className="FooterButtonSecondLeft">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatem, cum ipsa quas iusto eos nulla aperiam nobis, magnam, consectetur qui. Harum, animi! Mollitia fugit doloribus nihil, ipsam tenetur culpa.</div>
              <div className="FooterButtonSecondRight">
                  2019 Universal UI Kit
              </div>
          </div>
      </div>
  </div>
  </div>
}

export default Footer;
