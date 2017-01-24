import React from 'react';
import Login from '../LoginLayout/Desktop';
import Logo from '../Shared/LoginLogo';
import Form from './SignUpForm';

import styles from '../Shared/LoginForm.scss'

const SignIn = () => {
  return (
    <div data-spec='sign-in-screen'>
      <Login logo={<Logo />} form={<Form />} />
    </div>
  );
}

export default SignIn;