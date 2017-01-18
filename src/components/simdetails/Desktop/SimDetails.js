import React, { PropTypes } from 'react';
import SimDetailsHeader from './simdetailsheader';
import SimStatusDiagram from './simstatusdiagram';
import SimDetailsInfo from './simdetailsinfo';
import ChangeStatus from './changestatus';
import Tabs from './tabs';

import styles from './SimDetails.scss';

const { object } = PropTypes

const SimDetails = ({ sim }) => {
	return(
    <div>
      <SimDetailsHeader sim={sim} />
			<div>
        <div className={styles.main_wrap}>
          <ChangeStatus />
          <div className={styles.sim_status_diagram}><SimStatusDiagram /></div>
          <div className={styles.sim_details_info}><SimDetailsInfo /></div>
        </div>
      </div>
      <Tabs />
    </div>
  );
}

SimDetails.propTypes = {
	sim: object
}

export default SimDetails;
