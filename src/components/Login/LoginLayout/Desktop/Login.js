import React, { Component, PropTypes } from 'react';

import styles from './Login.scss';
import inlineStyle from './LoginStyle';

const {object} = PropTypes;

class Login extends Component {
  render() {
    return (
      <div className={styles.login_background}>
        <div className={styles.bckg_image} style={inlineStyle.bckg}>
          <div className={styles.login_container}>
            <div className={styles.login_logo} data-spec='login-logo'>
              {this.props.logo}
            </div>
            <div className={styles.login_form} data-spec='login-form'>
              {this.props.form}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  logo: object,
  form: object
}

export default Login;