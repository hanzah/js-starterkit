import React, { Component } from 'react';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/ImageSelector'

import styles from './SimDetailsHeader.scss';

const BackIcon = ImageSelector(CurrentContext.theme, 'svgs/back.svg');

class SimDetailsHeader extends Component {
  render() {
    return (
      <div>
        <div className={styles.sim_details_header}>
          <div className={styles.buttons}>
            <BackIcon/>
          </div>
          <span className={styles.sim_serial_number}>SIM No. 8901170425230326675</span>
        </div>
      </div>
    );
  }
}

export default SimDetailsHeader;