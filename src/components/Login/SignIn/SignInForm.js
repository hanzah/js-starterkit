import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import styles from '../Shared/LoginForm.scss';
import { buttonStyle, fieldStyle, checkboxStyle } from '../Shared/FormStyle';

const warning = ImageSelector(CurrentContext.theme, 'pending.png');
const Preview = ImageSelector(CurrentContext.theme, 'svgs/preview.svg');

const {string, func} = PropTypes;

class SignInForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      type: 'password'
    }
  }

  onMouseDown = () => {
    this.setState({type: 'text'})
  }

  onMouseUp = () => {
    this.setState({type: 'password'})
  }

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
              id="email" />
            <br />
            <div className={styles.field_title}>PASSWORD</div>
            <div className={styles.password_wrapper}>
              <Preview className={styles.preview_password} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}/>
              <TextField
                inputStyle={fieldStyle.inputStyle}
                underlineFocusStyle={fieldStyle.underlineFocusStyle}
                underlineStyle={fieldStyle.underlineStyle}
                fullWidth={true}
                style={fieldStyle.style}
                type={this.state.type}
                id="password" /></div>
            <br />
            <div className={styles.checkbox_wrapper}>
              <Checkbox
                data-spec='remember-me'
                label="Remember me"
                className={styles.checkbox}
                iconStyle={checkboxStyle.iconStyle}
                />
              <div className={styles.forgot_password_wrapper}><a data-spec='forgot-password' onClick={this.props.forgotPassword}
                className={styles.forgot_password}>Forgot password?</a>
              </div>
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
  request: func,
  forgotPassword: func
}

export default SignInForm;