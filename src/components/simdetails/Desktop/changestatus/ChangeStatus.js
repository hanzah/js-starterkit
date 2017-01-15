import React, { PropTypes, Component } from 'react';
import { FirstStatus, Status } from '../statuses/Statuses';
import cn from 'classnames';

import styles from './ChangeStatus.scss';

const {func} = PropTypes;

const Statuses = [
  {
    status: 'active'
  }, {
    status: 'suspend'
  }, {
    status: 'deactivate'
  }, {
    status: 'remove'
  }, {
    status: 'purge'
  }, {
    status: 'delete'
  }
]

class ChangeStatus extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addedClass: 'active'
    }

  }

  handleStatusChange = (status) => {
    this.setState({ addedClass: status });
  }

  render() {

    return (
      <div
        onClick={this.props.handleToggleShowChangeStatus}
        className={cn(styles.status_overlay)}>
        <div className={styles.circles_wrap}>
          {Statuses.map((status, index) => {
            if (index === 0) {
              return (<FirstStatus index={index} key={index} addedClass={this.state.addedClass} status={status.status} handleStatusChange={this.handleStatusChange} />
              )
            } else {
              return (<Status index={index} key={index} addedClass={this.state.addedClass} status={status.status} handleStatusChange={this.handleStatusChange} />
              )
            }
          })}
        </div>
      </div>
    );
  }
}

export default ChangeStatus;

ChangeStatus.propTypes = {
  handleToggleShowChangeStatus: func
}