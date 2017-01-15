import React, { Component } from 'react';
import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NewGameIcon from 'material-ui/svg-icons/av/playlist-add';
import NewPageIcon from 'material-ui/svg-icons/action/note-add';
import styles from './Header.scss';

class AddButton extends Component {

  render() {
    return (
      <div className={styles.floater_menu}>
        <SpeedDial
          fabContentOpen={
            <ContentAdd />
          }
          fabContentClose={
            <NavigationClose />
          }
          >

          <SpeedDialItem
            fabContent={<NewGameIcon />}
            onTouchTap={this.props.newCard}
            />

          <SpeedDialItem
            fabContent={<NewPageIcon />}
            onTouchTap={this.props.newCards}
            />

        </SpeedDial>
      </div >
    );
  }
}

AddButton.propTypes = {
  newCard: React.PropTypes.func,
  newCards: React.PropTypes.func
}

export default AddButton;