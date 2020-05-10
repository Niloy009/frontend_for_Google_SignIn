import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import './App.css';

function App() {
  const [tokenID, setTokenID] = useState('');
  const [idtoken, setIDToken] = useState('');

  const responseGoogle = (response) => {
    setTokenID(response.tokenId);
    setIDToken(response?.tokenObj?.id_token);
  };

  return (
    <div className="App">
      <h1> Login With Google </h1>
      <GoogleLogin
        clientId="995478869107-s0m002cncatnfo7rjtefchq9hird88n6.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <hr />
      <h1>TokenID:{tokenID}</h1>
      <hr />
      <h2>IdToken:{idtoken}</h2>

      <div></div>
    </div>
  );
}

export default App;
