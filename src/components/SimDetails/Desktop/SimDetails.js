import React, {Component, PropTypes} from 'react';
import SimDetailsHeader from './SimDetailsHeader';
import SimStatusDiagram from './SimStatusDiagram';
import SimDetailsInfo from './SimDetailsInfo';
import ChangeStatus from './ChangeStatus';
import Tabs from './tabs';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'

import styles from './SimDetails.scss';

import { FormattedDate } from 'react-intl'

const pending = ImageSelector(CurrentContext.theme, 'pending.png');

const {object, bool} = PropTypes

class SimDetails extends Component{
	render() {
		const {sim} = this.props
		return (
			<div>
				<SimDetailsHeader sim={sim}/>
				<div>
					{this.renderPendingStatus()}
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

	renderPendingStatus() {
		const { scheduleData } = this.props.sim
		if(!scheduleData) return null
		return (
			<div className={styles.pending_changes}>
				<div className={styles.pending_img}>
					<img src={pending} alt="pending"/>
				</div>
				<div className={styles.pending_text}>
					<div>
						<span>
							There are some pending changes for this SIM, starting on &nbsp;
							<FormattedDate value={scheduleData.date} year='numeric' month='long' day='2-digit'>
								{(date) => <element>{date}</element>}
							</FormattedDate>.
						</span>
						<span>See History below for details.</span>
					</div>
				</div>
			</div>
		)
	}
}

SimDetails.propTypes = {
  sim: object,
	simStatusModalOpen: bool
}

export default SimDetails;
