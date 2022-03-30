import React from 'react';

import './Header.css';

const Header = ({ imgSrc ='/image/itracklogo.png', title }) => {
 return (<div className='head'>
          <img className='art' src={imgSrc} />
          <text className='title'>{title}</text>
        </div>);
}

export default Header;