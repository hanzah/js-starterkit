import React, {Component, PropTypes} from 'react';
import SimDetailsHeader from './simdetailsheader';
import SimStatusDiagram from './simstatusdiagram';
import SimDetailsInfo from './simdetailsinfo';
import ChangeStatus from './changestatus';
import Tabs from './tabs';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'

const pending = ImageSelector(CurrentContext.theme, 'pending.png');

import styles from './SimDetails.scss';

const {object, bool} = PropTypes

class SimDetails extends Component{
	render() {
		const {sim} = this.props
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
									starting on 14.2.2017.
								</span>
								<span>See History below for details.</span>
							</div>
						</div>
					</div>
					<div className={styles.main_wrap}>
						{this.renderStatus()}
						<div className={styles.sim_details_info}>
							<SimDetailsInfo sim={sim}/>
						</div>
					</div>
				</div>
				<Tabs/>
			</div>
		)
	}

	renderStatus() {
		if(this.props.simStatusModalOpen){
			return(
				<ChangeStatus sim={this.props.sim}/>
			)
		}
		return(
			<div className={styles.sim_status_diagram}>
				<SimStatusDiagram sim={this.props.sim}/>
			</div>
		)
	}
}

SimDetails.propTypes = {
  sim: object,
	simStatusModalOpen: bool
}

export default SimDetails;
