import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import injectTapEventPlugin from 'react-tap-event-plugin';

import styles from './Header.scss';

injectTapEventPlugin();

const menuStyles = {
  userIcon: {
    width: 25,
    height: 25,
    color: 'white'
  },
  userButton: {
    height: '40px',
    width: '40px',
    padding: '0px'
  },
  menuFont: {
    fontSize: '13px',
    fontFamily: 'omnesatt_iiregular'
  }
};

const UserMenu = () => {
  return (
    <div className={styles.user_menu_position}>
      <IconMenu
        iconButtonElement={<IconButton iconStyle={menuStyles.userIcon}
          style={menuStyles.userButton}><MoreVertIcon /></IconButton>}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
        <MenuItem primaryText="Edit Graphs view" style={menuStyles.menuFont} disabled={true} />
        <MenuItem primaryText="Edit SIMs list view" style={menuStyles.menuFont} disabled={true} />
        <MenuItem primaryText="Change language" secondaryText="EN" style={menuStyles.menuFont} disabled={true} />
      </IconMenu>
    </div>
  );
}

export default UserMenu;
