import React from 'react';
import './Card.css'
import card3 from '../../../assets/images/card-3.svg'
import bookmark from '../../../assets/icons/Bookmark.svg'
import Comment from '../../../assets/icons/Comment.svg'
import Heart from '../../../assets/icons/Heart.svg'
const Card = () => {
  return <div className='carduch'>
    <div className="left">
       <img src={card3} className='cardimg' />
    </div>
    <div className="right">
      <div className="cardtop">
        <div className="flightuch">Science</div>
        <img className='bookmark' src={bookmark} ></img>
      </div>
      <div className="CardTitle">
        Watch the High-Flying Physics of Plant's Exploding Fruits
      </div>
      <div className="CardText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quia error itaque quidem veritatis mollitia tempora id, ad possimus libero, nesciunt quasi deleniti suscipit exercitationem sint saepe similique delectus? Repellendus.</div>
      <div className="comments">
          <div className="commentItem">Aug 6</div>
          <div className="commentItem"><img src={Comment}/>  <div className='cardnumber'>30</div></div>
          <div className="commentItem"><img src={Heart} />  <div className='cardnumber'>224</div></div>
      </div>
    </div>
  </div>;
};

export default Card;
