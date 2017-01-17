import React, {Component} from 'react';
import styles from './SidebarComponent.scss'
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/ImageSelector'
import SidebarItem from '../sidebaritem'
import { Link } from 'react-router'

const logo = ImageSelector(CurrentContext.theme, 'logo.png');
const simIcon = ImageSelector(CurrentContext.theme, 'svgs/sim.svg');
const deviceIcon = ImageSelector(CurrentContext.theme, 'svgs/device.svg');
const billingIcon = ImageSelector(CurrentContext.theme, 'svgs/billing.svg');
const automationIcon = ImageSelector(CurrentContext.theme, 'svgs/automation.svg');
const reportsIcon = ImageSelector(CurrentContext.theme, 'svgs/reports.svg');
const adminIcon = ImageSelector(CurrentContext.theme, 'svgs/admin.svg');
//const apiIcon = ImageSelector(CurrentContext.theme, 'svgs/api.svg');
//const supportIcon = ImageSelector(CurrentContext.theme, 'svgs/support.svg');
//const analyticIcon = ImageSelector(CurrentContext.theme, 'svgs/analytic.svg');
const signoutIcon = ImageSelector(CurrentContext.theme, 'svgs/signout.svg');

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.mc_sidebar}>
        <div className={styles.mc_att_logo}>
          <Link to="/"><img id="logotest" src={logo} alt="ATT"/></Link>
        </div>
        <ul>
          <li>
            <SidebarItem link='/sims' icon={simIcon} label='SIMS'/>
          </li>
          <li>
            <SidebarItem link='/devices' icon={deviceIcon} label='DEVICES'/>
          </li>
          <li>
            <SidebarItem link='/billing' icon={billingIcon} label='BILLING'/>
          </li>
          <li>
            <SidebarItem link='/automation' icon={automationIcon} label='AUTOMATION'/>
          </li>
          <li>
            <SidebarItem link='/reports' icon={reportsIcon} label='REPORTS'/>
          </li>
          {/*<li>
            <SidebarItem link='/analytics' icon={analyticIcon} label='ANALYTICS'/>
          </li>*/}
          <li>
            <SidebarItem link='/administration' icon={adminIcon} label='ADMINISTRATION'/>
          </li>
          {/*<li>
            <SidebarItem link='/api' icon={apiIcon} label='API'/>
          </li>
          <li>
            <SidebarItem link='/support' icon={supportIcon} label='SUPPORT'/>
          </li>*/}
          <li>
            <SidebarItem link='/signout' icon={signoutIcon} label='SIGNOUT'/>
          </li>
        </ul>
      </div>
    );

  }
}

export default Sidebar;
