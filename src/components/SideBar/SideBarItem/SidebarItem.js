import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl';
import styles from './SidebarItem.scss'

const { string, object } = PropTypes

const SidebarItem = ({ link, icon, label }) => {
	return (
		<Link to={link} data-spec={label}  activeClassName={styles.active} >
			<div>
        {icon}  
        <span>
        <FormattedMessage
          id={label}
          defaultMessage={label}
        />
        </span>
			</div>
		</Link>
  );
}

SidebarItem.propTypes = {
 link: string,
 icon: object,
 label: string
}

export default SidebarItem;