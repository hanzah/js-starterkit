import React, { Component, PropTypes } from 'react';
import SearchBar from '../searchbar';
import UserMenu from './UserMenu';
import cn from 'classnames';

import styles from './Header.scss';

const { string, bool } = PropTypes;

class UpperHeader extends Component {
  render() {
    return (
      <div>
        {this.renderTitle()}
        <UserMenu />
        {this.renderUserImage()}
        <SearchBar name='SIM' />
      </div>
    );
  }

  renderTitle() {
    return (
      <div className={styles.title} data-spec='title'>
        <div className={styles.product_title}>{this.props.productTitle}</div>
        <div className={styles.section_title}>{this.props.sectionTitle}</div>
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

UpperHeader.defaultProps = {
	userImage: "http://www.shreevinayakbuildestate.com/images/people-profile-dummy-219x227.jpg",
  productTitle: 'PRODUCT TITLE',
  sectionTitle: 'SIM management'
}

UpperHeader.propTypes = {
	userImage: string,
	showMenu: bool,
  productTitle: string,
  sectionTitle: string
}

export default UpperHeader;
