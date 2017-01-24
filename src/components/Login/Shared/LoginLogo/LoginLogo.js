import React, {PropTypes} from 'react';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'
import styles from './LoginLogo.scss';

const Logo = ImageSelector(CurrentContext.theme, 'svgs/logo.svg');

const {string} = PropTypes;

const LoginLogo = (props) => {
  return (
    <div>
      <div className={styles.logo_containter}>
        <div className={styles.logo} data-spec='logo-wrapper'>
          <Logo data-spec='logo'/>
        </div>
        <div className={styles.product_title} data-spec='product-name'>
          {props.productName}
      </div>
      </div>
      <div className={styles.copyright_container}>
        Copyright &copy; 2017 AT&T. All rights reserved.
      </div>
    </div>
  );
}

LoginLogo.defaultProps = {
  productName: 'PRODUCT TITLE'
}

LoginLogo.propTypes = {
  productName: string
}

export default LoginLogo;