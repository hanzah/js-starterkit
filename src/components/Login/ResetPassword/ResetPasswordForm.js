import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from '../Shared/LoginForm.scss';
import { buttonStyle, fieldStyle } from '../Shared/FormStyle';

const {string, func} = PropTypes;

class ResetPasswordForm extends Component {
  render() {
    return (
      <div className={styles.form_containter}>
        <div className={styles.title}>
          <div data-spec='title'>{this.props.title}</div>
          <div data-spec='subtitle'>{this.props.subtitle}</div>
        </div>
        <div className={styles.field_containter}>
          <div className={styles.field_title}>E MAIL</div>
          <TextField
            inputStyle={fieldStyle.inputStyle}
            underlineFocusStyle={fieldStyle.underlineFocusStyle}
            underlineStyle={fieldStyle.underlineStyle}
            fullWidth={true}
            style={fieldStyle.style}
            id="email" />
          <br />
        </div>
        <div className={styles.button_containter}>
          <RaisedButton data-spec='login-button' overlayStyle={buttonStyle.primary.overlayStyle} buttonStyle={buttonStyle.primary.style} key="Login" label="Log In" primary={true} fullWidth={true} onClick={this.props.sendResetLink} />
          <RaisedButton data-spec='request-access-button' buttonStyle={buttonStyle.secondary.style} style={buttonStyle.secondary.style} labelStyle={buttonStyle.secondary.labelStyle} key="Request" label="Request Access" fullWidth={true} onClick={this.props.login} />
        </div>
      </div>
    );
  }
}

ResetPasswordForm.defaultProps = {
  title: 'Reset Password',
  subtitle: 'Please enter your email to reset your password.'
}

ResetPasswordForm.propTypes = {
  title: string,
  subtitle: string,
  sendResetLink: func,
  login: func
}

export default ResetPasswordForm;