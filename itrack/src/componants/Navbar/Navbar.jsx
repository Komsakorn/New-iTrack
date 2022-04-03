import React from 'react';

import './Navbar.css';

const Navbar = () => {
 return (
          <div className='Nav'>
              <div className='NavMenu'>
              <a className='NavLink' href='http://localhost:3000/'>
                HOME
                </a>
              <a className='NavLink' href="http://localhost:3000/add-activity">
                ADD ACTIVITIES
                </a>
              <a className='NavLink' href="http://localhost:3000/activity-list">
                ACTIVITY LIST
                </a>
              <a className='NavLink' href='#'>
                BLOG
                </a>
              <a className='NavLink' href='#'>
                CONTACT US
                </a>
              <a className='NavLink' href='#'>
                <img className='profile-icon' alt='profile-icon' src="/image/966-9665493_my-profile-icon-blank-profile-image-circle.png" />
                </a>
              </div>
          </div>
        
        );
}

export default Navbar;