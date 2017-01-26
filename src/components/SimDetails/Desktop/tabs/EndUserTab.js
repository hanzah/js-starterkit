import React, { Component } from 'react';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'
import styles from './SimDetailsTabs.scss';

const user = ImageSelector(CurrentContext.theme, 'user-info-o.png');

class EndUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      showCheckboxes: false,
      selectable: false
    };
  }
  render() {
    return (
      <div className={styles.end_user_container}>
        <div className={styles.details_button_container}>Edit End User</div>
        <div className={styles.end_user_addresses}>
          <div className={styles.addresses_block}>
            <div className={styles.user_icon}><img src={user} alt="User" /></div>
            <div className={styles.user_info}>
              <p>Jane Doe</p>
              <p>+1 212 439 6500</p>
              <p>jane.de@gmail.com</p>
            </div>
          </div>
          <div className={styles.addresses_block}>
            <div className={styles.address_title}>Billing Address</div>
            <div className={styles.address_content}>
              <p>102 Ericsson Street</p>
              <p>303317 Atlanta</p>
              <p>Georgia</p>
              <p>USA</p>
            </div>
          </div>
          <div className={styles.addresses_block}>
            <div className={styles.address_title}>PPU Address</div>
            <div className={styles.address_content}>
              <p>102 Ericsson Street</p>
              <p>303317 Atlanta</p>
              <p>Georgia</p>
              <p>USA</p>
            </div>
          </div>
          <div className={styles.addresses_block}>
            <div className={styles.address_title}>Shipping Address</div>
            <div className={styles.address_content}>
              <p>102 Ericsson Street</p>
              <p>303317 Atlanta</p>
              <p>Georgia</p>
              <p>USA</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EndUser;
