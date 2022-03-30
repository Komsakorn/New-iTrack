import React from 'react';

import './FacebookButton.css';

const FacebookButton = ({ children, title }) => {
  const loginWithFacebook = () => {
    window.open('https://www.facebook.com');
  }

  return <img className='facebook-btn' src='/facebook.svg' alt='facebook' onClick={loginWithFacebook}/>;
}

export default FacebookButton;