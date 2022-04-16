import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './common/LandingPage/LandingPage';
import LoginPage from './common/LoginPage/Login';

const code = new URLSearchParams(window.location.search).get("code")

export const App = () => {

      return (
        code ?
        <LandingPage code={code} /> :
        <LoginPage /> 
      )
}

ReactDOM.render(
    <App/>,
   document.getElementById('root')
  )