import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentEdit from 'material-ui/svg-icons/content/create';
import styles from './Header.scss';
const style = {
  marginRight: 20
};

class EditButton extends Component {
  render() {
    return (
      <div className={styles.floater_button_possition}>
        <FloatingActionButton style={style} backgroundColor={'#80c342'} onClick={this.props.handleClick} disabled={this.props.buttonStatus}>
          <ContentEdit />
        </FloatingActionButton>
      </div>
    );
  }
}

EditButton.propTypes = {
  handleClick: React.PropTypes.func,
  buttonStatus: React.PropTypes.bool
}

export default EditButton;