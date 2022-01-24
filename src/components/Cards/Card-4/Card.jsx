import React from 'react';
import './Card.css'
import card4 from '../../../assets/images/card-4.svg'
import bookmark from '../../../assets/icons/Bookmark.svg'
import Comment from '../../../assets/icons/Comment.svg'
import Heart from '../../../assets/icons/Heart.svg'

const Card = () => {
  return <div className='cardtort'>
    <div className="left">
       <img src={card4} alt='img' className='cardimg' />
    </div>
    <div className="right">
      <div className="cardtop">
        <div className="flight">Health</div>
        <img className='bookmark' src={bookmark} alt='img' />
      </div>
      <div className="CardTitle">
        How  the  Shape  of  Your  Ears  Affects  What You Hear
      </div>
      <div className="CardText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quia error itaque quidem veritatis mollitia tempora id, ad possimus libero, nesciunt quasi deleniti suscipit exercitationem sint saepe similique delectus? Repellendus.</div>
      <div className="comments">
          <div className="commentItem">Oct 22</div>
          <div className="commentItem"><img src={Comment}alt='img'/>  <div className='cardnumber'>5</div></div>
          <div className="commentItem"><img src={Heart} alt='img'/>  <div className='cardnumber'>82</div></div>
      </div>
    </div>
  </div>;
};

export default Card;
