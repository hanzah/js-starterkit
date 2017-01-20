import React, { Component, PropTypes } from 'react';
import SearchBar from '../SearchBar';
import UserMenu from 'components/Headers/Shared/UserMenu';

import styles from './TopBarHeader.scss';

const { string } = PropTypes;

class TopBarHeader extends Component {
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

TopBarHeader.defaultProps = {
  userImage: "http://www.shreevinayakbuildestate.com/images/people-profile-dummy-219x227.jpg",
  productTitle: 'PRODUCT TITLE'
}

TopBarHeader.propTypes = {
  userImage: string,
  productTitle: string,
  sectionTitle: string
}

export default TopBarHeader;
