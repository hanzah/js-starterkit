import React, { Component } from 'react';
import SearchBar from '../searchbar';
import UserMenu from './UserMenuComponent';
import MoreButton from './MoreButtonComponent';
import styles from './HeaderComponent.scss';

class Header extends Component {
	render() {
		return (
			<div className={styles.mc_header}>
				<div className={styles.upper_header}>
					{ this.renderMenu() }
          { this.renderTitle() }
          <UserMenu />
          { this.renderUserImage() }
          <SearchBar name='SIM' />
        </div>
        <div className={styles.lower_header}>
					<span className={styles.chart_names}>inventory status</span>
          <span className={styles.chart_names}>inventory by carrier</span>
          <span className={styles.chart_names}>countries</span>
        </div>
        <MoreButton />
      </div>
    );
  }

	renderMenu() {
		return (
			<div className={styles.menu}>
				<div className={styles.hamburger}>
					<span></span>
				</div>
			</div>
		)
	}

	renderTitle() {
		return (
			<div className={styles.page_title}>
				<div className={styles.mc_title}>MISSION CONTROL</div>
				<div className={styles.mc_section_title}>SIM management</div>
			</div>
		)
	}

	renderUserImage() {
		return (
			<div className={styles.user_image_position}>
				<img
					className={styles.user_image}
					src="https://lh3.googleusercontent.com/CwlZEQdJqBGj3PlZXQPq6dsiVwD6eWMy4DgYBU-uFi30UEa5wOWFWJ1PfnEweULhVlmZgPLvijca6A=w1366-h768-rw-no"
				/>
			</div>
		)
	}
}

export default Header;