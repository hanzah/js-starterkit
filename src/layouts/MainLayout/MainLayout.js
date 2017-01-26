import React, { PropTypes } from 'react'
import { DesktopSidebarComponent } from 'components/SideBar'
import styles from './MainLayout.scss'
import cn from 'classnames';

const { object, bool } = PropTypes

const MainLayout = ({ children, showMenu }) => {
  return (
    <div className={cn(styles.mc_global_container, { [styles.mc_global_container_padding]: showMenu })}>
      <DesktopSidebarComponent />
      <div className={styles.component_wrapper}>
        {children}
      </div>

    </div>
  );
}

MainLayout.propTypes = {
  children: object,
	showMenu: bool
}

export default MainLayout;
