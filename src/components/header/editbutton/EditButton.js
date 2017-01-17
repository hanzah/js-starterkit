import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentEdit from 'material-ui/svg-icons/content/create';

import styles from './EditButton.scss';
import style from './EditButtonStyle.js';

const {func, bool} = PropTypes;

const EditButton = ({handleClick, buttonStatus}) => {
  return (
    <div className={styles.floater_button_possition} data-spec='edit-button'>
      <FloatingActionButton onClick={handleClick} backgroundColor={style.backgroundColor} disabledColor={style.disabledColor} iconStyle={{ fill: style.fill }} disabled={buttonStatus}>
        <ContentEdit />
      </FloatingActionButton>
    </div>
  );
}

EditButton.propTypes = {
  handleClick: func,
  buttonStatus: bool
}

export default EditButton;