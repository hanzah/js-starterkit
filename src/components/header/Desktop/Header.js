import React, { Component, PropTypes } from 'react';
import SearchBar from '../searchbar';
import UserMenu from './UserMenu';
import AddButton from '../addbutton';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';

import styles from './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.upper_header}>
          {this.renderMenu()}
          {this.renderTitle()}
          <UserMenu />
          {this.renderUserImage()}
          <SearchBar name='SIM' />
        </div>
        <AddButton />
      </div>
    );
  }

  renderMenu() {
    return (
      <div className={styles.menu} data-spec='hamburger_menu'>
        <div className={cn(styles.hamburger, styles.active)}>
          <span></span>
        </div>
      </div>
    )
  }

  renderTitle() {
    return (
      <div className={styles.title} data-spec='title'>
        <div className={styles.product_title}><FormattedMessage
                    id="PRODUCT_TITLE"
                /></div>
        <div className={styles.section_title}><FormattedMessage
                    id="SECTION_TITLE"
                /></div>
      </div>
    )
  }

  renderUserImage() {
    return (
      <div className={styles.user_image_position} data-spec='user_image'>
        <img
          className={styles.user_image}
          src={this.props.userImage}
          />
      </div>
    )
  }
}

export default Header;