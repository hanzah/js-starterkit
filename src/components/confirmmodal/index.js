import React, {Component, PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';

const {string, bool, array, object} = PropTypes;

class ConfirmModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Dialog
          title={this.props.title}
          open={this.props.open}
          actions={this.props.actions}>
         {this.props.children}
        </Dialog>
      </div>
    );
  }
}

export default ConfirmModal;

ConfirmModal.propTypes = {
  title: string,
  open: bool,
  actions: array,
  children: object
}