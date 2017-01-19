import React, { PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentEdit from 'material-ui/svg-icons/content/create';

import styles from './EditButton.scss';
import inlineStyles from './EditButtonStyle.js';

const {func} = PropTypes;

const EditButton = ({handleClick}) => {
  return (
    <div className={styles.floater_button_possition} data-spec='edit-button'>
      <FloatingActionButton onClick={handleClick} backgroundColor={inlineStyles.backgroundColor}>
        <ContentEdit />
      </FloatingActionButton>
    </div>
  );
}

EditButton.propTypes = {
  handleClick: func
}

export default EditButton;