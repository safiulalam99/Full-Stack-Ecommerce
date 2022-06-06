import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  const handleSucess = async (googleResponse: any) => {
    const tokenId = googleResponse.credential
    console.log('tokenId:', tokenId)
    console.log(googleResponse)
  }

  const clientId ='562271276406-2fmcdq1ue2kqia033m3pku5tjp62hio4.apps.googleusercontent.com'
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin onSuccess={handleSucess} />
      </GoogleOAuthProvider>
    </header>
  </div>
  );
}

export default App;
