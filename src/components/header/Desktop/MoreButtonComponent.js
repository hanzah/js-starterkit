import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import styles from './HeaderComponent.scss';
const style = {
    marginRight: 20,
};
const MoreButton = () => (
	<div className={styles.floater_button_possition}>
		<FloatingActionButton style={style} backgroundColor={'#80c342'}>
			<ContentAdd />
		</FloatingActionButton>
  </div>
);
export default MoreButton;
