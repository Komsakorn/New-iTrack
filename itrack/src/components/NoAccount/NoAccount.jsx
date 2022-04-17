import React from 'react';


import './NoAccount.css';

const NoAccount = ({ isLoggedIn = false,}) => {

  if(isLoggedIn) return null;
  
  return (<div className='no-account'>
            <text>Don’t have an account?</text>
            <span className='bold signup'>
                <div className='signup pointer'>Sign Up</div>
            </span>
          </div>);
}

export default NoAccount;