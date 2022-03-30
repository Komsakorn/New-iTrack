import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import "./GoogleButton.css"
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId =
'597160784904-fuii4m74980cgg222ga4lv3p551ab78f.apps.googleusercontent.com';

function GoogleButton() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n `
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default GoogleButton;