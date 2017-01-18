import React, { PropTypes } from 'react';
import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/ImageSelector'

import styles from './AddButton.scss';

const AddSim = ImageSelector(CurrentContext.theme, 'svgs/add-sim.svg');
const AddSims = ImageSelector(CurrentContext.theme, 'svgs/add-multiple-sims.svg');

const {func} = PropTypes;

const AddButton = ({newSim, newSims}) => {
  return (
    <div className={styles.floater_menu} data-spec='add-button'>
      <SpeedDial
        fabContentOpen={<ContentAdd />}
        fabContentClose={<NavigationClose />}>
        <SpeedDialItem
          fabContent={<AddSim />}
          onTouchTap={newSim} />
        <SpeedDialItem
          fabContent={<AddSims />}
          onTouchTap={newSims} />
      </SpeedDial>
    </div>
  );
}

AddButton.propTypes = {
  newSim: func,
  newSims: func
}

export default AddButton;