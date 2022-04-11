import React from 'react';
import './Navbar.css';
import LogoutHooks from '../GoogleButton/GoogleLogout';


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
              <span id="fbLogout" onclick="fbLogout()"><a class="fb_button fb_button_medium"><span class="fb_button_text"><LogoutHooks /></span></a></span>
                </a>
              </div>
          </div>
        
        );
}

export default Navbar;