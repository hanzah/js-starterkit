import React from 'react';
import Login from '../LoginLayout/Desktop';
import Logo from '../shared/LoginLogo';
import Form from './SignInForm';

const SignIn = () => {
  return (
    <div data-spec='sign-in-screen'>
      <Login logo={<Logo />} form={<Form />} />
    </div>
  );
}

export default SignIn;
