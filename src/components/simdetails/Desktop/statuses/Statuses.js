import React, {Component, PropTypes} from 'react';
import cn from 'classnames';
import styles from './Statuses.scss';

const {string, func, number} = PropTypes;

export default class Status extends Component {
  render() {

    if (this.props.index == 0) {

      return (
        <div
          className={cn(styles.circle, styles.selected, styles[this.props.addedClass])}
          onClick={() => this.props.handleStatusChange('active')}>
          <div className={styles.circle_data}>
            <div className={styles.number}>450.02
              <span>MB</span>
            </div>
            <div className={styles.status_state}>{this.props.status}</div>
          </div>
        </div>
      );

    } else {
      return (
        <div
          className={cn(styles.circle, styles[this.props.status])}
          onClick={() => {
          this
            .props
            .handleStatusChange(this.props.status);
        }}>
          <span>{this.props.status}</span>
        </div>
      );
    }

  }
}

Status.propTypes = {
  addedClass: string,
  handleStatusChange: func,
  status: string,
  index: number
}
