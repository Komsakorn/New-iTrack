import React from 'react';

import './Navbar.css';

const Navbar = () => {
 return (
          <div className='Nav'>
              <div className='NavMenu'>
              <div className='NavLink'>
                ABOUT US
                </div>
              <div className='NavLink'>
                ADD ACTIVITIES
                </div>
              <div className='NavLink'>
                ACTIVITY LIST
                </div>
              <div className='NavLink'>
                BLOG
                </div>
              <div className='NavLink'>
                CONTACT US
                </div>
              <div className='NavLink'>
                <img className='profile-icon' src="/image/966-9665493_my-profile-icon-blank-profile-image-circle.png" />
                </div>
              </div>
          </div>
        
        );
}

export default Navbar;