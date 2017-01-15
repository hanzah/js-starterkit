import React, { Component } from 'react';

import styles from './SimDetailsHeader.scss';

class SimDetailsHeader extends Component {
  render() {
    return (
      <div>
        <div className={styles.sim_details_header}>
          <div className={styles.buttons}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"><rect width="36" height="36" /><path
                d="M22.4 30.5h-4.7c-0.2 0-0.4-0.2-0.4-0.4v-3.3c0-0.2 0.2-0.4 0.4-0.4h4.7c3.1 0 5.6-2.5 5.6-5.6 0-3.1-2.5-5.6-5.6-5.6H12l0 2.8c0 0.5-0.3 0.7-0.8 0.4l-1.3-0.9 -5.3-3.8c-0.3-0.2-0.3-0.6 0-0.8l0.3-0.2 6.3-4.6C11.6 7.8 12 7.9 12 8.5l0 2.8h10.5c5.3 0 9.6 4.3 9.6 9.6C32.1 26.2 27.8 30.5 22.4 30.5z" /></svg>
            <span className={styles.sim_serial_number}>SIM No. 8901170425230326675</span>
            <div className={styles.add_nickname}>+ ADD NICKNAME</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimDetailsHeader;