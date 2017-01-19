import React, { Component, PropTypes } from 'react';
import TopBarHeader from 'components/headers/shared/topBarHeader/TopBarHeader';
import cn from 'classnames';

import styles from './Header.scss';

const { func, bool, object, string } = PropTypes;

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.upper_header}>
          {this.renderMenu()}
          <TopBarHeader sectionTitle={this.props.sectionTitle} />
        </div>
        <div className={styles.lower_header}>
          {this.props.lowerHeader}
        </div>
        {this.props.button}
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
  toggleMenu: func,
  showMenu: bool,
  button: object,
  lowerHeader: object,
  sectionTitle: string
}

export default Header;
