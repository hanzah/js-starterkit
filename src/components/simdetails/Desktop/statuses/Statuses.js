import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Statuses.scss';

export class FirstStatus extends Component {
  render() {
    return (
      <div
        className={cn(styles.circle, styles.selected, styles[this.props.addedClass])}
        onClick={() => this.props.handleStatusChange('active')}>
        <div className={styles.circle_data}>
          <div className={styles.number}>450.02
            <span>MB</span>
          </div>
          <div>{this.props.status}</div>
        </div>
      </div>
    );
  }
}

export class Status extends Component {
  render() {
    return (
      <div
        className={cn(styles.circle, styles[this.props.status])}
        onClick={() => {
          this.props.handleStatusChange(this.props.status);
        } }>
        <span>{this.props.status}</span>
      </div>
    );
  }
}



