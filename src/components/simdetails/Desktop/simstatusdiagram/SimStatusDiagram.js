import React, { Component } from 'react';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/ImageSelector'

const logo = ImageSelector(CurrentContext.theme, 'logo.png');
const caret = ImageSelector(CurrentContext.theme, 'caret.png');

import styles from './SimStatusDiagram.scss';

class SimInfo extends Component {

  render() {
    return (
      <div>
        <div className={styles.siminfo_detail}>
          <div className={styles.sim_graph}>
            <div className={styles.mbs}>
              <div className={styles.circle}>
                <div>
                  <div onClick={this.handleToggleShowChangeStatus} className={styles.circle_data}>
                    <div className={styles.number}>450.02
                        <span>MB</span>
                    </div>
                    <div>ACTIVE</div>
                  </div>
                </div>
              </div>
              <div className={styles.session_status}>
                <span>IN SESSION</span>
                <span>ACTIVE <img src={caret} alt="caret"/></span>
              </div>
            </div>

            <div className={styles.brand_name}>
              <div className={styles.circle}>
                <div className={styles.connection_line}></div>
                <div className={styles.logo}>
                  <img src={logo} alt="att" />
                </div>
              </div>
              <div className={styles.sim_profile}>
                <span>ACTIVE SIM PROFILE</span>
                <span>AT&amp;T <img src={caret} alt="caret"/></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default SimInfo;