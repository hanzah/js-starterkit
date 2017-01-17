import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl';
import styles from './SidebarItem.scss'


const { string } = PropTypes

const SidebarItem = ({ link, icon, label }) => {
	return (
		<Link to={link} activeClassName={styles.active} >
			<div>
				<img src={icon} />
				<span>
					<FormattedMessage
						id={label}
						defaultMessage="{label}"
						values={{
							label: label
						}}
					/>
				</span>
			</div>
		</Link>
  );
}

SidebarItem.propTypes = {
 link: string,
 icon: string,
 label: string
}

export default SidebarItem;
