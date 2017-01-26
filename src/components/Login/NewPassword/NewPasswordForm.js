import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from '../shared/LoginForm.scss';
import { buttonStyle, fieldStyle } from '../Shared/FormStyle';

const {string, func} = PropTypes;

class NewPassword extends Component {
  render() {
    return (
      <div className={styles.form_containter}>
        <div className={styles.title}>
          <div data-spec='title'>{this.props.title}</div>
          <div data-spec='subtitle'>{this.props.subtitle}</div>
        </div>
        <div className={styles.field_containter}>
          <br />
          <div className={styles.field_title}>NEW PASSWORD</div>
          <TextField
            inputStyle={fieldStyle.inputStyle}
            underlineFocusStyle={fieldStyle.underlineFocusStyle}
            underlineStyle={fieldStyle.underlineStyle}
            fullWidth={true}
            style={fieldStyle.style}
            type="password"
            id="password" /><br />
                    <div className={styles.field_title}>CONFIRM PASSWORD</div>
          <TextField
            inputStyle={fieldStyle.inputStyle}
            underlineFocusStyle={fieldStyle.underlineFocusStyle}
            underlineStyle={fieldStyle.underlineStyle}
            fullWidth={true}
            style={fieldStyle.style}
            type="password"
            id="password-confirm" /><br />

        </div>
        <div className={styles.button_containter}>
          <RaisedButton data-spec='login-button' overlayStyle={buttonStyle.primary.overlayStyle} buttonStyle={buttonStyle.primary.style} key="Login" label="Log In" primary={true} fullWidth={true} onClick={this.props.login} />
        </div>
      </div>
    );
  }
}

NewPassword.defaultProps = {
  title: 'Reset Password',
  subtitle: 'Please select password.'
}

NewPassword.propTypes = {
  title: string,
  subtitle: string,
  login: func
}

export default NewPassword;
