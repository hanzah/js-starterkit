import React, { PropTypes } from 'react';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'

import styles from './SimDetailsHeader.scss';

const BackIcon = ImageSelector(CurrentContext.theme, 'svgs/back.svg');

const { object, func } = PropTypes

const SimDetailsHeader = ({ sim, onBackButtonClick }) => {
  return (
    <div>
      <div className={styles.sim_details_header}>
        <div className={styles.buttons}>
          <BackIcon onClick={onBackButtonClick}/>
        </div>
        <span className={styles.sim_serial_number}>SIM No. {sim.number}</span>
      </div>
    </div>
  );
}

SimDetailsHeader.propTypes = {
	sim: object,
	onBackButtonClick: func
}

export default SimDetailsHeader;
