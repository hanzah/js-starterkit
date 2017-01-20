import React, {PropTypes, Component} from 'react';
import Status from '../statuses/Statuses';
import cn from 'classnames';
import ConfirmModal from 'components/confirmmodal';
import RaisedButton from 'material-ui/RaisedButton';
import {buttonStyle, fieldStyle} from './style';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

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

const DialogContent = (props) => {
  return (
    <div className={styles.dialog_wrap}>
      <div className={styles.modal_top}>
        <div className={styles.modal_text}>Please select date to set up your changes and confirm.</div>
        <div className={styles.field_title}>DATE (OBLIGATORY)</div>
        <DatePicker
          onChange={props.onDateChange}
          underlineFocusStyle={fieldStyle.underlineFocusStyle}
          underlineStyle={fieldStyle.underlineStyle}
          textFieldStyle={fieldStyle.datepicker.style}
          hintStyle={fieldStyle.hintStyle}
          hintText="DD/MM/YY"/>
      </div>
      <div className={styles.modal_bottom}>
        <div className={styles.field_title}>ADDITIONAL COMMENT</div>
        <TextField
          inputStyle={fieldStyle.inputStyle}
          underlineFocusStyle={fieldStyle.underlineFocusStyle}
          underlineStyle={fieldStyle.underlineStyle}
          hintStyle={fieldStyle.hintStyle}
          fullWidth={true}
          multiLine={true}
          style={fieldStyle.style}
          rowsMax={4}
          hintText="Add your optional comment about change here."/>
      </div>
    </div>
  );
}

DialogContent.propTypes ={
  onDateChange: func
}

class ChangeStatus extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addedClass: 'active',
      openModal: false,
      confirmDisabled:true
    }

  }

  onModalCancel = () => {
    this.setState({openModal: false, confirmDisabled:true})
  }

  onDateChange = () => {
      this.setState({confirmDisabled:false});
  }

  handleStatusChange = (status) => {
    this.setState({addedClass: status, openModal: true});
  }

  render() {

    const sim = this.props.sim;
    const actions = [ 
      <RaisedButton buttonStyle={buttonStyle.cancel.style} style={buttonStyle.cancel.style} labelStyle = {buttonStyle.cancel.labelStyle}
      onClick={this.onModalCancel} key="Cancel" label="Cancel" />, 
      <RaisedButton disabled={this.state.confirmDisabled} overlayStyle={buttonStyle.confirm.overlayStyle} buttonStyle={buttonStyle.confirm.style} key="Confirm" label = "Confirm" primary = {true} />
    ];

    return (
      <div
        onClick={this.props.handleToggleShowChangeStatus}
        className={cn(styles.status_overlay)}>
        <ConfirmModal
          actions={actions}
          open={this.state.openModal}
          title="CONFIRM CHANGES">
          <DialogContent onDateChange={this.onDateChange}/>
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