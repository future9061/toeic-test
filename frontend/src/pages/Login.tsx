import React from 'react';
import { LoginCSS } from '../style/pages/LoginCSS';
import LoginForm from '../components/login/LoginForm';
import Header from '../components/common/Header';

function Login() {
  return (
    <LoginCSS>
      <Header />
      <LoginForm />
    </LoginCSS>
  );
}

export default Login;
