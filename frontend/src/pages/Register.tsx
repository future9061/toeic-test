import React from 'react';
import { RegisterCSS } from '../style/pages/RegisterCSS';
import Header from '../components/common/Header';
import RegisterForm from '../components/register/RegisterForm';

function Register() {
  return (
    <RegisterCSS>
      <Header />
      <RegisterForm />
    </RegisterCSS>
  );
}

export default Register;
