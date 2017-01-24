import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router';

import styles from '../Shared/LoginForm.scss';
import { buttonStyle, fieldStyle, checkboxStyle } from '../Shared/FormStyle';

const PreviewIcon = ImageSelector(CurrentContext.theme, 'svgs/preview.svg');
const warning = ImageSelector(CurrentContext.theme, 'pending.png');

const {string, func} = PropTypes;

class SignInForm extends Component {
  render() {
    return (
      <div>
        <div className={styles.wrong_password}>
          <div className={styles.warning_img}>
            <img src={warning} alt="warning" />
          </div>
          <div className={styles.wrong_pass_text}>
            <div>
              <div>Wrong Password!</div>
              <div>Password does not match provided email.</div>
            </div>
          </div>
        </div>
        <div className={styles.form_containter}>
          <div className={styles.title} style={{ paddingTop: 70 }}>
            <div data-spec='title' >{this.props.title}</div>
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
            <div className={styles.field_title}>PASSWORD</div>
            <TextField
              inputStyle={fieldStyle.inputStyle}
              underlineFocusStyle={fieldStyle.underlineFocusStyle}
              underlineStyle={fieldStyle.underlineStyle}
              fullWidth={true}
              style={fieldStyle.style}
              type="password"
              id="password" /><br />
            <div className={styles.checkbox_wrapper}>
              <Checkbox
                data-spec='remember-me'
                label="Remember me"
                className={styles.checkbox}
                iconStyle={checkboxStyle.iconStyle}
                />
              <div className={styles.forgot_password}><Link data-spec='forgot-password'>Forgot password?</Link></div>
            </div>
          </div>
          <div className={styles.button_containter}>
            <RaisedButton data-spec='login-button' overlayStyle={buttonStyle.primary.overlayStyle} buttonStyle={buttonStyle.primary.style} key="Login" label="Log In" primary={true} fullWidth={true} onClick={this.props.login} />
            <RaisedButton data-spec='request-access-button' buttonStyle={buttonStyle.secondary.style} style={buttonStyle.secondary.style} labelStyle={buttonStyle.secondary.labelStyle} key="Request" label="Request Access" fullWidth={true} onClick={this.props.request} />
          </div>
        </div>
      </div>
    );
  }
}

SignInForm.defaultProps = {
  title: 'Log In',
  subtitle: 'Please enter your email and password.'
}

SignInForm.propTypes = {
  title: string,
  subtitle: string,
  login: func,
  request: func
}

export default SignInForm;