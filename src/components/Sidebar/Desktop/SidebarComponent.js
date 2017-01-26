import React, { PropTypes } from 'react';
import styles from './SidebarComponent.scss'
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'
import SidebarItem from '../SideBarItem'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const logo = ImageSelector(CurrentContext.theme, 'logo.png');
const SimIcon = ImageSelector(CurrentContext.theme, 'svgs/sim.svg');
const DeviceIcon = ImageSelector(CurrentContext.theme, 'svgs/device.svg');
const BillingIcon = ImageSelector(CurrentContext.theme, 'svgs/billing.svg');
const AutomationIcon = ImageSelector(CurrentContext.theme, 'svgs/automation.svg');
const AnalyticIcon = ImageSelector(CurrentContext.theme, 'svgs/analytic.svg');
const AdminIcon  = ImageSelector(CurrentContext.theme, 'svgs/admin.svg');
const SignoutIcon  = ImageSelector(CurrentContext.theme, 'svgs/signout.svg');

const { bool } = PropTypes

class Sidebar extends React.Component {
  render() {
    return (
			<ReactCSSTransitionGroup
				transitionName={{
				enter: styles.appear,
				enterActive: styles.appear_active,
				leave: styles.leave,
				leaveActive: styles.leave_active
			}}
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
			>
				{this.props.showMenu ? this.renderMenu() : null}
			</ReactCSSTransitionGroup>
    );
	}

	renderMenu() {
		return (
			<div data-spec="test" className={styles.mc_sidebar} >
				<div className={styles.mc_att_logo}>
					<Link data-spec="homeLogo" to="/">
						<img id="logotest" src={logo} alt="ATT"/>
					</Link>
				</div>
				<ul>
					<li>
						<SidebarItem link='/sims' icon={<SimIcon/>} label='SIMS' />
					</li>
					<li>
						<SidebarItem link='/devices' icon={<DeviceIcon/>} label='DEVICES'/>
					</li>
					<li>
						<SidebarItem link='/billing' icon={<BillingIcon/>} label='BILLING'/>
					</li>
					<li>
						<SidebarItem link='/automation' icon={<AutomationIcon/>} label='AUTOMATION'/>
					</li>
					<li>
						<SidebarItem link='/analytics' icon={<AnalyticIcon/>} label='ANALYTICS'/>
					</li>
					<li>
						<SidebarItem link='/administration' icon={<AdminIcon />} label='ADMINISTRATION'/>
					</li>
					<li>
						<SidebarItem link='/signout' icon={<SignoutIcon/>} label='SIGNOUT'/>
					</li>
				</ul>
			</div>
		)
	}
}

Sidebar.propTypes = {
	showMenu: bool
}

export default Sidebar;
