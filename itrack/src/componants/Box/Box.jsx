import React from 'react';

import './Box.css';
import Login from '../page/Login';

const Box = ({ imgSrc ='/image/run3-1.png'}) => {
 return (
 <div className="center">
   <div className='box'>
          <img className='banner' src={imgSrc} />
          <div className='login'> <Login />
          </div>
        </div>
        </div>);
}

export default Box;