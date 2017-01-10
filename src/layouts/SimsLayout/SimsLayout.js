import React, { PropTypes } from 'react'
import {  DesktopHeaderComponent } from 'components/header'
import styles from './SimsLayout.scss'

const { object } = PropTypes

const SimsLayout = ({children}) => {
	return (
		<element>
      <DesktopHeaderComponent />
      <div className={styles.mc_main_container}>
				<div className={styles.mc_content}>
					{children}
				</div>
      </div>
    </element>
  );
}

SimsLayout.propTypes = {
 children: object
}

export default SimsLayout;
