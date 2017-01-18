import React, { Component, PropTypes } from 'react';
import UpperHeader from './UpperHeader';
import LowerHeader from './LowerHeader';
import AddButton from '../addbutton';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';

import styles from './Header.scss';

const { string } = PropTypes;

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.upper_header}>
        <UpperHeader/>
        </div>
        <div className={styles.lower_header}>
        <LowerHeader/>
        </div>
        <AddButton />
      </div>
    );
  }
}

export default Header;
