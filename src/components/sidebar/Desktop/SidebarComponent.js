import React, {Component} from 'react';
import styles from './SidebarComponent.scss'
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/ImageSelector'
import SidebarItem from '../sidebaritem'
import { Link } from 'react-router'

const logo = ImageSelector(CurrentContext.theme, 'logo.png');
const SimIcon = ImageSelector(CurrentContext.theme, 'svgs/sim.svg');
const DeviceIcon = ImageSelector(CurrentContext.theme, 'svgs/device.svg');
const BillingIcon = ImageSelector(CurrentContext.theme, 'svgs/billing.svg');
const AutomationIcon = ImageSelector(CurrentContext.theme, 'svgs/automation.svg');
const AnalyticIcon = ImageSelector(CurrentContext.theme, 'svgs/analytic.svg');
const AdminIcon  = ImageSelector(CurrentContext.theme, 'svgs/admin.svg');
const SignoutIcon  = ImageSelector(CurrentContext.theme, 'svgs/signout.svg');



class Sidebar extends Component {
  render() {
    return (
      <div data-spec="test" className={styles.mc_sidebar}>
        <div className={styles.mc_att_logo}>
          <Link data-spec="homeLogo" to="/"><img id="logotest" src={logo} alt="ATT"/></Link>
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
          {/*<li>
            <a href="#" title="Reports">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 36 36">
                  <rect width="36" height="36" /><path
                    d="M29 8.1l-3.7-3.7c-0.4-0.4-1-0.6-1.5-0.6H8.2c-1 0-1.8 0.8-1.8 1.8l0 19.5c0 0.2 0.2 0.4 0.4 0.4 0.2 0 0.4-0.2 0.4-0.4l0-19.5c0-0.6 0.5-1 1.1-1h15.6c0.1 0 0.2 0 0.3 0.1v4.3c0 0.2 0.2 0.4 0.4 0.4h4.3c0 0.1 0.1 0.2 0.1 0.3l0 20.8c0 0.6-0.5 1-1.1 1H8.2c-0.2 0-0.4 0.2-0.4 0.4 0 0.2 0.2 0.4 0.4 0.4h19.6c1 0 1.8-0.8 1.8-1.8l0-20.8C29.6 9.1 29.4 8.5 29 8.1zM24.9 5l3.5 3.5h-3.5V5zM10.3 23c0 0.4 0.3 0.7 0.6 0.7h2c0.3 0 0.6-0.3 0.6-0.7v-1.9c0-0.4-0.3-0.7-0.6-0.7h-2c-0.3 0-0.6 0.3-0.6 0.7V23zM11.1 21.2h1.7v1.7h-1.7V21.2zM15.2 22c0-0.2 0.2-0.4 0.4-0.4h9.6c0.2 0 0.4 0.2 0.4 0.4 0 0.2-0.2 0.4-0.4 0.4h-9.6C15.4 22.4 15.2 22.2 15.2 22zM10.3 18.6c0 0.4 0.3 0.7 0.6 0.7h2c0.3 0 0.6-0.3 0.6-0.7v-1.9c0-0.4-0.3-0.7-0.6-0.7h-2c-0.3 0-0.6 0.3-0.6 0.7V18.6zM11.1 16.7h1.7v1.7h-1.7V16.7zM15.2 17.6c0-0.2 0.2-0.4 0.4-0.4h9.6c0.2 0 0.4 0.2 0.4 0.4 0 0.2-0.2 0.4-0.4 0.4h-9.6C15.4 18 15.2 17.8 15.2 17.6zM15.2 13.2c0-0.2 0.2-0.4 0.4-0.4h9.6c0.2 0 0.4 0.2 0.4 0.4 0 0.2-0.2 0.4-0.4 0.4h-9.6C15.4 13.6 15.2 13.4 15.2 13.2zM11.1 14.2l-0.6-0.8c-0.1-0.2-0.1-0.4 0.1-0.5 0.2-0.1 0.4-0.1 0.5 0.1l0.6 0.7 1.8-2.2c0.1-0.2 0.4-0.2 0.5-0.1 0.2 0.1 0.2 0.4 0.1 0.5l-1.8 2.3c-0.1 0.2-0.3 0.3-0.5 0.3 0 0 0 0 0 0C11.4 14.4 11.2 14.3 11.1 14.2z" /></svg>
                <span>REPORTS</span>
              </div>
            </a>
          </li>
            <li>

                        <a href="#" title="Analytics">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 36 36"><rect width="36" height="36"/><path
                                    d="M32.6 9.5v17.3c0 1.3-1 2.3-2.3 2.3H5.8c-0.2 0-0.4-0.2-0.4-0.4 0-0.2 0.2-0.4 0.4-0.4h24.5c0.9 0 1.6-0.7 1.6-1.6V9.5c0-0.9-0.7-1.6-1.6-1.6H5.8c-0.9 0-1.6 0.7-1.6 1.6V24c0 0.2-0.2 0.4-0.4 0.4 -0.2 0-0.4-0.2-0.4-0.4V9.5c0-1.3 1-2.3 2.3-2.3h24.5C31.5 7.2 32.6 8.2 32.6 9.5zM9.9 21.3l1.5-4.8c-0.7-0.4-1.3-1.1-1.3-2 0-1.2 1-2.3 2.3-2.3 1.2 0 2.3 1 2.3 2.3 0 0.6-0.3 1.2-0.7 1.6l1.2 1.9c0.2-0.1 0.4-0.1 0.6-0.1 0.4 0 0.7 0.1 1 0.4l1.7-1.6c-0.1-0.1-0.1-0.3-0.1-0.5 0-0.7 0.6-1.3 1.3-1.3 0.7 0 1.3 0.6 1.3 1.3 0 0.4-0.2 0.7-0.4 0.9l2 4.9c0.1 0 0.2 0 0.4 0 0.1 0 0.1 0 0.2 0l2.1-8.3c-0.5-0.3-0.9-0.8-0.9-1.5 0-0.9 0.7-1.6 1.6-1.6 0.9 0 1.6 0.7 1.6 1.6 0 0.9-0.7 1.6-1.6 1.6l-2.1 8.3c0.6 0.3 1 0.9 1 1.6 0 1-0.8 1.9-1.9 1.9 -1 0-1.9-0.8-1.9-1.9 0-0.6 0.3-1.2 0.8-1.6l-1.9-4.9c0 0-0.1 0-0.2 0 -0.2 0-0.5-0.1-0.7-0.2l-1.8 1.6c0.1 0.2 0.2 0.4 0.2 0.7 0 0.9-0.7 1.6-1.6 1.6 -0.9 0-1.6-0.7-1.6-1.6 0-0.4 0.2-0.8 0.4-1.1l-1.2-1.9c-0.3 0.1-0.6 0.2-0.9 0.2 -0.1 0-0.2 0-0.3 0l-1.5 4.8c0.3 0.2 0.5 0.6 0.5 1 0 0.7-0.6 1.3-1.3 1.3 -0.7 0-1.3-0.6-1.3-1.3C8.6 21.9 9.2 21.3 9.9 21.3 9.9 21.3 9.9 21.3 9.9 21.3zM25.8 13.1c0.5 0 0.9-0.4 0.9-0.9 0-0.5-0.4-0.9-0.9-0.9 -0.5 0-0.9 0.4-0.9 0.9C24.9 12.7 25.3 13.1 25.8 13.1zM21.7 23.8c0 0.6 0.5 1.1 1.1 1.1 0.6 0 1.1-0.5 1.1-1.1 0-0.6-0.5-1.1-1.1-1.1C22.2 22.7 21.7 23.2 21.7 23.8zM19.2 16.1c0 0.3 0.2 0.5 0.5 0.5 0.3 0 0.5-0.2 0.5-0.5 0-0.3-0.2-0.5-0.5-0.5C19.4 15.6 19.2 15.8 19.2 16.1zM14.9 19.5c0 0.5 0.4 0.9 0.9 0.9 0.5 0 0.9-0.4 0.9-0.9s-0.4-0.9-0.9-0.9C15.3 18.6 14.9 19 14.9 19.5zM12.4 16c0.8 0 1.5-0.7 1.5-1.5 0-0.8-0.7-1.5-1.5-1.5 -0.8 0-1.5 0.7-1.5 1.5C10.9 15.3 11.6 16 12.4 16zM9.9 22.1c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5c0.3 0 0.5-0.2 0.5-0.5S10.1 22.1 9.9 22.1z"/></svg>
                                <span>ANALYTICS</span>
                            </div>
                        </a>

          </li>*/}
          <li>
            <SidebarItem link='/analytics' icon={<AnalyticIcon/>} label='ANALYTICS'/>
          </li>
          <li>
            <SidebarItem link='/administration' icon={<AdminIcon />} label='ADMINISTRATION'/>
          </li>
          {/*<li>
            <SidebarItem link='/api' icon={<ApiIcon/>} label='API'/>
          </li>
          <li>
            <SidebarItem link='/support' icon={supportIcon} label='SUPPORT'/>
          </li>*/}
          <li>
            <SidebarItem link='/signout' icon={<SignoutIcon/>} label='SIGNOUT'/>
          </li>
        
        </ul>
      </div>
    );

  }
}

export default Sidebar;
