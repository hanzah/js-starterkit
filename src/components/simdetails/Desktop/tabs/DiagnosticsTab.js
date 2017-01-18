import React, { Component } from 'react';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/ImageSelector'
import styles from './SimDetailsTabs.scss';

const diagnostics_check = ImageSelector(CurrentContext.theme, 'diagnostics-check.png');
const circles = ImageSelector(CurrentContext.theme, 'load-circles.png');

class Diagnostics extends Component {
  render() {
    return (
      <div className={styles.diagnostics_container}>
        <div className={styles.details_button_container}>Run Advanced Diagnostics</div>
        <div className={styles.diagnostics_blocks_container}>
          <div>{" "}</div>
          <div className={styles.diagnostics_block_icon}>
            <div><img src={diagnostics_check} alt="Check" /></div>
            <div className={styles.diagnostics_item_title}>passing traffic</div>
            <div className={styles.diagnostics_item_status}>allowed</div>
          </div>
          <div className={styles.diagnostics_block_dots}><img src={circles} alt="Circles" /></div>
          <div className={styles.diagnostics_block_icon}>
            <div><img src={diagnostics_check} alt="Check" /></div>
            <div className={styles.diagnostics_item_title}>wi-fi resources</div>
            <div className={styles.diagnostics_item_status}>allowed</div>
          </div>
          <div className={styles.diagnostics_block_dots}><img src={circles} alt="Circles" /></div>
          <div className={styles.diagnostics_block_icon}>
            <div><img src={diagnostics_check} alt="Check" /></div>
            <div className={styles.diagnostics_item_title}>wi-fi</div>
            <div className={styles.diagnostics_item_status}>connected</div>
          </div>
          <div className={styles.diagnostics_block_dots}><img src={circles} alt="Circles" /></div>
          <div className={styles.diagnostics_block_icon}>
            <div><img src={diagnostics_check} alt="Check" /></div>
            <div className={styles.diagnostics_item_title}>device</div>
            <div className={styles.diagnostics_item_status}>connected</div>
            <div className={styles.diagnostics_item_status}>ip 10.192.0.40</div>
          </div>
          <div>{" "}</div>
        </div>
      </div>
    );
  }
}

export default Diagnostics;