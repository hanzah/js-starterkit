import React, {PropTypes} from 'react';
import cn from 'classnames';
import styles from './Status.scss';

const {string, func, bool} = PropTypes;

const Status = ({value, label, selected, onStatusChange}) => {
  return (
    <div
      className={cn(styles.circle, styles[label], {[styles.selected]: selected})}
      onClick={() => {onStatusChange(value)}}
		>
      <span>{label}</span>
    </div>
  );
}

Status.propTypes = {
  selected: bool,
  onStatusChange: func,
  value: string,
	label: string
}

export default Status
