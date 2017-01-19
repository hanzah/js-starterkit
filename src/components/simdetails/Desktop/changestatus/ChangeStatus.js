import React, {PropTypes, Component} from 'react';
import Status from '../statuses/Statuses';
import cn from 'classnames';
import ConfirmModal from 'components/confirmmodal';
import RaisedButton from 'material-ui/RaisedButton';
import buttonStyle from './style'

import styles from './ChangeStatus.scss';

const {func, object} = PropTypes;

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

const dialogContent = () => {
  return(
    <div className={styles.dialog_wrap}>
        Dialog content
    </div>
  );
}

class ChangeStatus extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addedClass: 'active',
      openModal: false
    }

  }

  onModalCancel = () =>{
    this.setState({openModal:false})
  }

  handleStatusChange = (status) => {
    this.setState({addedClass: status, openModal:true});
  }

  render() {

    const sim = this.props.sim;
     const actions = [
      <RaisedButton style={buttonStyle.cancel.style} labelStyle={buttonStyle.cancel.labelStyle} onClick={this.onModalCancel} key="Cancel" label="Cancel"/>,
      <RaisedButton key="Confirm" label="Confirm" primary={true}/>
    ];

    return (
      <div
        onClick={this.props.handleToggleShowChangeStatus}
        className={cn(styles.status_overlay)}>
        <ConfirmModal actions={actions} open={this.state.openModal} title="CONFIRM CHANGES">
          {dialogContent()}
        </ConfirmModal>
        <div className={styles.circles_wrap}>
          {Statuses.map((status, index) => {
            return (<Status
              index={index}
              key={index}
              addedClass={this.state.addedClass}
              status={status.status}
              handleStatusChange={this.handleStatusChange}/>);
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
}

export default ChangeStatus;

ChangeStatus.propTypes = {
  handleToggleShowChangeStatus: func,
  sim: object
}