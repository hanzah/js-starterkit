import React, {Component, PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form'
import {
  DatePicker,
  TextField,
} from 'redux-form-material-ui'

import {buttonStyle, fieldStyle} from '../style';
import styles from './ConfirmSimEdit.scss';

const fields = [
  'date',
  'comment'
]

const required = value => value == null ? 'Required' : null

const {func, bool} = PropTypes;

class ConfirmModal extends Component {
  render() {
		const actions = [
			<RaisedButton
				buttonStyle={buttonStyle.cancel.style}
				style={buttonStyle.cancel.style}
				labelStyle={buttonStyle.cancel.labelStyle}
				onClick={this.props.onCancel}
				key="Cancel" label="Cancel"
			/>,
			<RaisedButton
				disabled={this.props.invalid}
				overlayStyle={buttonStyle.confirm.overlayStyle}
				onClick={this.props.handleSubmit(this.props.onSubmit)}
				buttonStyle={buttonStyle.confirm.style} key="Confirm" label="Confirm" primary
			/>
		];
    return (
      <div>
        <Dialog
          title="CONFIRM CHANGES"
          open={this.props.open}
          actions={actions}>
         {this.renderContent()}
        </Dialog>
      </div>
    );
  }

	renderContent() {
		return(
			<div className={styles.dialog_wrap}>
				<div className={styles.modal_top}>
					<div className={styles.modal_text}>Please select date to set up your changes and confirm.</div>
					<div className={styles.field_title}>DATE (OBLIGATORY)</div>
					<Field name="date"
						component={DatePicker}
						validate={required}
						format={null}
						underlineFocusStyle={fieldStyle.underlineFocusStyle}
						underlineStyle={fieldStyle.underlineStyle}
						textFieldStyle={fieldStyle.datepicker.style}
						hintStyle={fieldStyle.hintStyle}
						hintText="DD/MM/YY"
					/>
				</div>
				<div className={styles.modal_bottom}>
					<div className={styles.field_title}>ADDITIONAL COMMENT</div>
					<Field name="comment"
						component={TextField}
						inputStyle={fieldStyle.inputStyle}
						underlineFocusStyle={fieldStyle.underlineFocusStyle}
						underlineStyle={fieldStyle.underlineStyle}
						hintStyle={fieldStyle.hintStyle}
						fullWidth
						multiLine
						style={fieldStyle.style}
						rowsMax={4}
						hintText="Add your optional comment about change here."
					/>
				</div>
			</div>
		)
	}
}

export default reduxForm({
	form: 'confirm-sim-edit',
	fields
})(ConfirmModal);

ConfirmModal.propTypes = {
  open: bool,
	invalid: bool,
	onCancel: func,
	handleSubmit: func,
	onSubmit: func
}
