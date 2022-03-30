import React, { useEffect, useState } from 'react';
import './login.css';
import Button from '../button/Button';
import Input from '../input/Input';
import NoAccount from '../NoAccount/NoAccount';
import GoogleButton from '../GoogleButton/GoogleButton';
import FacebookButton from '../FacebookButton/FacebookButton';


const Login = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
  
  useEffect(() => {
    if(email.length > 0){ 
      setIsInvalid(!validateEmail(email));
    } else {
      setIsInvalid(false);
    }
  },[email]);
  
  return (
  <main> 
    <div className="center">
      <div className='box'>
         <img className='banner' src={'/image/run3-1.png'} />
          <div className='container'>
      <h1>Welcome to iTRACK</h1>
      <h5>Let’s log in to be better you (your health)</h5>
      <Input id='email' type='text' name='email' 
        placeholder='Enter your email' 
        value={email} 
        isInvalid={isInvalid}
        onChange={e => setEmail(e.target.value)}
        />
        <Input id='password' type='password' name='password' 
        placeholder='Enter your password' 
        value={password}
        onChange={e => setPassword(e.target.value)}
        /> 
      <Button>Login</Button>
      <GoogleButton />
      <FacebookButton />           
      <NoAccount onSignUpClick={() => alert('sign up')}/>
        </div>
      </div>
    </div>
  </main>
  );
}

export default Login;