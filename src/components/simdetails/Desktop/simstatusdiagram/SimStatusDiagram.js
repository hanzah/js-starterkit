import React, { PropTypes } from 'react';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'
import { FormattedNumber } from 'react-intl';

const logo = ImageSelector(CurrentContext.theme, 'logo.png');
const caret = ImageSelector(CurrentContext.theme, 'caret.png');

const {object, func} = PropTypes;


import styles from './SimStatusDiagram.scss';

const SimStatusDiagram = ({sim, onSimStatusModalOpen}) => {
	return (
		<div>
			<div className={styles.siminfo_detail}>
				<div className={styles.sim_graph}>
					<div className={styles.mbs}>
						<div className={styles.circle}>
							<div>
								<div className={styles.circle_data}>
									<div className={styles.number}><FormattedNumber value={sim.sessions || '430'} />
										<span>MB</span>
                  </div>
                  <div className={styles.status_state}>{sim.status}</div>
                </div>
              </div>
            </div>
            <div onClick={onSimStatusModalOpen} className={styles.session_status}>
              <span>IN SESSION</span>
              <span>{sim.status} <img src={caret} alt="caret"/></span>
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

SimStatusDiagram.propTypes = {
  sim: object,
  onSimStatusModalOpen: func
}

export default SimStatusDiagram;
