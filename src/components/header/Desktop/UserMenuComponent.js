import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styles from './HeaderComponent.scss';
injectTapEventPlugin();
const iconStyles = {
    userIcon: {
        width: 25,
        height: 25,
        color: 'white'
    },
    userButton: {
        height: '40px',
        width: '40px',
        padding: '0px'
    }
};
class UserMenu extends Component {
    render() {
        return (
            <div className={styles.user_menu_position}>
                    <IconMenu
                        iconButtonElement={<IconButton iconStyle={iconStyles.userIcon}
                            style={iconStyles.userButton}><MoreVertIcon /></IconButton>}
                        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >
                        <MenuItem primaryText="Edit Graphs view" />
                        <MenuItem primaryText="Edit SIMs list view" />
                    </IconMenu>
            </div>
        );
    }
}
export default UserMenu;
