import React, { Component } from 'react';
import UpperHeader from './UpperHeader';
import LowerHeader from './LowerHeader';
import AddButton from '../addbutton';

import styles from './Header.scss';

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
