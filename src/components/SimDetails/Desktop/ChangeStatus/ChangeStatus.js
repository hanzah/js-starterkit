import React, {PropTypes, Component} from 'react';
import Status from '../Status/Status';
import cn from 'classnames';
import {ConfirmSimEdit} from 'components/ConfirmSimEdit';
import styles from './ChangeStatus.scss';

const {func, object, bool} = PropTypes;

const Statuses = [
	{ value: 'ACTIVE', label: 'active' },
	{ value: 'SUSPENDED', label: 'suspend' },
	{ value: 'DEACTIVATED', label: 'deactivate' },
	{ value: 'REMOVED', label: 'remove' },
	{ value: 'PURGED', label: 'purge' },
	{ value: 'DELETED', label: 'delete' }
]

const sortStatuses = (currentStatus) => {
	return Statuses.sort((s1, s2) => {
		switch(currentStatus) {
    case s1.value:
        return -1
    case s2.value:
        return 1
    default:
        return 0
		}
	})
}

class ChangeStatus extends Component {

	onSimEditSubmit = (values) => {
		this.props.onSimEditSubmit(this.props.sim.number, values)
	}

  onStatusChange = (status) => {
		this.updateData = {status}
		this.props.onSimStatusChange()
  }

	onSimEditSubmit = (values) => {
		this.props.onSimEditSubmit(this.props.sim.number, this.updateData.status, values)
	}

  render() {
    const sim = this.props.sim;

    return (
      <div className={cn(styles.status_overlay)}>
				<div onClick={this.props.onSimStatusModalClose}>Close</div>
        <ConfirmSimEdit
          open={this.props.confirmSimEditOpen}
					onCancel={this.props.onSimEditCancel}
					onSubmit={this.onSimEditSubmit}
				/>
        <div className={styles.circles_wrap}>
          {sortStatuses(sim.status).map((status, index) => {
            return (
							<Status
								key={index}
								selected={sim.status === status.value}
								value={status.value}
								label={status.label}
								onStatusChange={this.onStatusChange}
							/>
						);
          })}
          <div className={styles.overlay_text}>
            IN SESION
            <span>|</span>
            {sim.status}
          </div>
        </div>
      </div>
    );
  }

	componentWillUnmount() {
		this.props.onSimStatusModalClose()
	}
}

ChangeStatus.propTypes = {
  sim: object,
	onSimStatusModalClose: func,
	onSimStatusChange: func,
	confirmSimEditOpen: bool,
	onSimEditCancel: func,
	onSimEditSubmit: func
}

export default ChangeStatus;
