import React, { Component, PropTypes } from 'react';
import UpperHeader from './UpperHeader';
import LowerHeader from './LowerHeader';
import AddButton from '../addbutton';
import cn from 'classnames';

import styles from './Header.scss';

const { func } = PropTypes;

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.upper_header}>
          {this.renderMenu()}
          <UpperHeader />
        </div>
        <div className={styles.lower_header}>
          <LowerHeader />
        </div>
        <AddButton />
      </div>
    );
  }

  renderMenu() {
    return (
      <div className={styles.menu} data-spec='hamburger_menu' onClick={this.toggleMenu}>
        <div className={cn(styles.hamburger, { [styles.active]: this.props.showMenu })}>
          <span></span>
        </div>
      </div>
    )
  }

  toggleMenu = () => {
    this.props.toggleMenu()
  }
}

Header.propTypes = {
  toggleMenu: func
}

export default Header;
