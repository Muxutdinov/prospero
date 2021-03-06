import React from 'react';
import './Card.css'
import card2 from '../../../assets/images/card-2.svg'
import bookmark from '../../../assets/icons/Bookmark-red.svg'
import Comment from '../../../assets/icons/Comment.svg'
import Heart from '../../../assets/icons/Heart.svg'
const Card = () => {
  return <div className='cardikki'>
    <div className="left">
       <img src={card2} alt='img' className='cardimg' />
    </div>
    <div className="right">
      <div className="cardtop">
        <div className="flightikki">Food</div>
        <img className='bookmarkikki' src={bookmark} alt='img' />
      </div>
      <div className="CardTitle">
        Three Courses, Eures: The Affordable Dining Renaissance in Paris
      </div>
      <div className="CardText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quia error itaque quidem veritatis mollitia tempora id, ad possimus libero, nesciunt quasi deleniti suscipit exercitationem sint saepe similique delectus? Repellendus.</div>
      <div className="comments">
          <div className="commentItem">Oct 7</div>
          <div className="commentItem"><img src={Comment}alt='img'/>  <div className='cardnumber'>27</div></div>
          <div className="commentItem"><img src={Heart} alt='img'/>  <div className='cardnumber'>129</div></div>
      </div>
    </div>
  </div>;
};

export default Card;
