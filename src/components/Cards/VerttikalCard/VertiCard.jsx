import React from 'react';
import './VertiCard.css'
import v1 from '../../../assets/images/v1.svg'
import v2 from '../../../assets/images/v2.svg'
import v3 from '../../../assets/images/v3.svg'
import v4 from '../../../assets/images/v4.svg'
import v5 from '../../../assets/images/v5.svg'
import v6 from '../../../assets/images/v6.svg'
import v7 from '../../../assets/images/v7.svg'
import n1 from '../../../assets/images/1.svg'
import n2 from '../../../assets/images/2.svg'
import n3 from '../../../assets/images/3.svg'
import n4 from '../../../assets/images/4.svg'
import n5 from '../../../assets/images/5.svg'
import n6 from '../../../assets/images/6.svg'
import n7 from '../../../assets/images/7.svg'

const VertiCard = () => {
  return <div className='CardLeft'>
    <div className='VtWrapper'>
    <div className='VcardTitle'>
           Recommended for you
    </div>
    </div>
    <div className='borderheader'></div>
    <div className='VcardWrapper'>
    <div className='VcardBox'>
       <img src={v1} alt='img' className='vfirst'/>
       <div className='Vmain'>
         <div className='vtitle'>
            Office Meeting Leave the Office
         </div>
         <div className="vtext">
           15 minutes ago
         </div>
       </div>
       <div>
         <img  src={n1} alt='img'/>
       </div>
    </div>
    <div className='vmiddleborder'></div>
    <div className='VcardBox'>
       <img src={v2} className='vfirst' alt='img'/>
       <div className='Vmain'>
         <div className='vtitle'>
            Experimental Vocal Music in Brooklyn
         </div>
         <div className="vtext">
           33 minutes ago
         </div>
       </div>
       <div>
         <img  src={n2} alt='img'/>
       </div>
    </div>
    <div className='vmiddleborder'></div>
    <div className='VcardBox'>
       <img src={v3} className='vfirst' alt='img' />
       <div className='Vmain'>
         <div className='vtitle'>
            Google's Influence Over Think Tanks
         </div>
         <div className="vtext">
           38 minutes ago
         </div>
       </div>
       <div>
         <img  src={n3} alt='img' />
       </div>
    </div>
    <div className='vmiddleborder'></div>
    <div className='VcardBox'>
       <img src={v4} className='vfirst' alt='img' />
       <div className='Vmain'>
         <div className='vtitle'>
            Homes for Sale in NYC and Connecticut
         </div>
         <div className="vtext">
           47 minutes ago
         </div>
       </div>
       <div>
         <img  src={n4} alt='img'/>
       </div>
    </div>
    <div className='vmiddleborder'></div>
    <div className='VcardBox'>
       <img src={v5} className='vfirst' alt='img'/>
       <div className='Vmain'>
         <div className='vtitle'>
            Are You There,Dad?
            It's Me, Alice 
         </div>
         <div className="vtext">
           49 minutes ago
         </div>
       </div>
       <div>
         <img  src={n5} alt='img'/>
       </div>
    </div>
    <div className='vmiddleborder'></div>
    <div className='VcardBox'>
       <img src={v6} className='vfirst' alt='img'/>
       <div className='Vmain'>
         <div className='vtitle'>
            The New Punk Look:
            Lacy and Colorful
         </div>
         <div className="vtext">
           1 hour ago
         </div>
       </div>
       <div>
         <img  src={n6} alt='img'/>
       </div>
    </div>
    <div className='vmiddleborder'></div>
    <div className='VcardBox'>
       <img src={v7} className='vfirst' alt='img' />
       <div className='Vmain'>
         <div className='vtitle'>
            Sunday Best in Harlem and Brooklyn
         </div>
         <div className="vtext">
           2 hour ago
         </div>
       </div>
       <div>
         <img  src={n7} alt='img'/>
       </div>
    </div>
    </div>
    <div className='borderheader'></div>
    <div className='Vcardfooter'>
              Readmore
    </div>
  </div>;
};

export default VertiCard;
