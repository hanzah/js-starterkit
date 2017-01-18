import React, {Component} from 'react';
import SimDetailsHeader from './simdetailsheader';
import SimStatusDiagram from './simstatusdiagram';
import SimDetailsInfo from './simdetailsinfo';
import ChangeStatus from './changestatus';
import Tabs from './tabs';

import styles from './SimDetails.scss';

class SimDetails extends Component {
  render() {
    return (
      <div>
        <SimDetailsHeader/>
        <div>
          <ChangeStatus/>
          <div className={styles.main_wrap}>
            <div className={styles.sim_status_diagram}><SimStatusDiagram/></div>
            <div className={styles.sim_details_info}><SimDetailsInfo/></div>
          </div>
        </div>
        <Tabs/>
      </div>
    );
  }
}

export default SimDetails;