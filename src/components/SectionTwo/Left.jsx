import React from 'react';

const Left = () => {
  return <div>
    <div className="top">
      <div className="top-left-card">
        Top Left card
      </div>
      <div className="top-right-card">
        Top Right card
      </div>
    </div>
    <div className="bottom">
      <div className="bottom-left-card">Bottom Left Card</div>
      <div className="bottom-right-card">
        <div className="bottom-right-card-top">
          <div className="bottom-right-cards">Card 1</div>
          <div className="bottom-right-cards">Card 2</div>
        </div>
        <div className="bottom-right-card-bottom">
          <div className="bottom-right-cards">Card 3</div>
          <div className="bottom-right-cards">Card 4</div>
        </div>
      </div>
    </div>
  </div>;
};

export default Left;
