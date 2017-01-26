import React, { Component } from 'react'
import { DesktopMediaQuery } from 'utils/CustomMediaQuery'
import DesktopLogin from 'components/Login/SignIn'

class LoginView extends Component {
  render() {
    return (
      <element>
        <DesktopMediaQuery>
          <DesktopLogin name="desktop" />
        </DesktopMediaQuery>
      </element>
    );
  }
}

export default LoginView;
