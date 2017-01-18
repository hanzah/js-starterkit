import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import styles from './Header.scss';
import menuStyles from './UserMenuStyle';

const UserMenu = () => {
  return (
    <div className={styles.user_menu_position} data-spec='user_menu'>
      <IconMenu
        iconButtonElement={<IconButton iconStyle={menuStyles.userIcon}
          style={menuStyles.userButton}><MoreVertIcon /></IconButton>}
        anchorOrigin={ menuStyles.position }
        targetOrigin={ menuStyles.position }
        >
        <MenuItem primaryText="Edit Graphs view" style={menuStyles.menuFont} disabled={true} data-spec='graph_view'/>
        <MenuItem primaryText="Edit SIMs list view" style={menuStyles.menuFont} disabled={true} data-spec='list_view'/>
        <MenuItem primaryText="Change language" secondaryText="EN" style={menuStyles.menuFont} disabled={true} data-spec='language'/>
      </IconMenu>
    </div>
  );
}

export default UserMenu;
