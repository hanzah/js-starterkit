import React, {PropTypes} from 'react';
import SimDetailsHeader from './simdetailsheader';
import SimStatusDiagram from './simstatusdiagram';
import SimDetailsInfo from './simdetailsinfo';
import ChangeStatus from './changestatus';
import Tabs from './tabs';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'

const pending = ImageSelector(CurrentContext.theme, 'pending.png');

import styles from './SimDetails.scss';

const {object} = PropTypes

const SimDetails = ({sim}) => {
  return (
    <div>
      <SimDetailsHeader sim={sim}/>
      <div>
        <div className={styles.pending_changes}>
          <div className={styles.pending_img}>
            <img src={pending} alt="pending"/>
          </div>
          <div className={styles.pending_text}>
            <div>
              <span>There are some pending changes for this SIM, initiated by John Smith,
                starting on 14.2.2017.</span>
              <span>See History below for details.</span>
            </div>
          </div>
        </div>
        <div className={styles.main_wrap}>
          <ChangeStatus sim={sim}/>
          <div className={styles.sim_status_diagram}><SimStatusDiagram sim={sim}/></div>
          <div className={styles.sim_details_info}><SimDetailsInfo sim={sim}/></div>
        </div>
      </div>
      <Tabs/>
    </div>
  );
}

SimDetails.propTypes = {
  sim: object
}

export default SimDetails;
