import React from 'react';

import './Navbar.css';

const Navbar = () => {
 return (
          <div className='Nav'>
              <div className='NavMenu'>
              <div className='NavLink nav-button'>
                ABOUT US
                </div>
              <button className='NavLink nav-button'>
                ADD ACTIVITIES
                </button>
              <div className='NavLink nav-button'>
                ACTIVITY LIST
                </div>
              <div className='NavLink nav-button'>
                BLOG
                </div>
              <div className='NavLink nav-button'>
                CONTACT US
                </div>
              <div className='NavLink nav-button'>
                <img className='profile-icon' src="/image/966-9665493_my-profile-icon-blank-profile-image-circle.png" />
                </div>
              </div>
          </div>
        
        );
}

export default Navbar;