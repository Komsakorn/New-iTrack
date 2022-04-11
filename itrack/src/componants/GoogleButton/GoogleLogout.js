import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
'597160784904-fuii4m74980cgg222ga4lv3p551ab78f.apps.googleusercontent.com';

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;