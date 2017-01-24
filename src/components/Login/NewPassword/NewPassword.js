import React from 'react';
import Login from '../LoginLayout/Desktop';
import Logo from '../Shared/LoginLogo';
import Form from './NewPasswordForm';

const NewPassword = () => {
  return (
    <div data-spec='sign-in-screen'>
      <Login logo={<Logo />} form={<Form />} />
    </div>
  );
}

export default NewPassword;