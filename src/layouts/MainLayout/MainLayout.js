import React, { PropTypes } from 'react'
import {  DesktopSidebarComponent } from 'components/sidebar'
import styles from './MainLayout.scss'

const { object } = PropTypes

const MainLayout = ({children}) => {
	return (
		<div className={styles.mc_global_container}>
			<DesktopSidebarComponent />
			{children}
    </div>
  );
}

MainLayout.propTypes = {
 children: object
}

export default MainLayout;
